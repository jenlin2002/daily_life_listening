#!/usr/bin/env python3
"""替所有場景補產生語音檔（只產生缺少的，已經有的不會重做）。

用法：
  python3 tools/make_audio.py              # 所有場景
  python3 tools/make_audio.py fast-food    # 只做指定場景
  python3 tools/make_audio.py --check      # 只列出缺少幾個，不產生
  python3 tools/make_audio.py --prune      # 另外刪掉已經沒用到的舊語音

需要：pip install kokoro-onnx soundfile，以及 ffmpeg。
模型檔（kokoro-v1.0.int8.onnx、voices-v1.0.bin）從
https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0 下載，
放在環境變數 KOKORO_DIR 指定的資料夾（預設是 tools/models/，這個資料夾不要放進 git）。
"""
import os, sys, subprocess, shutil
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

def find_ffmpeg():
    """優先用系統 PATH 裡的 ffmpeg；沒有的話用 pip 套件 imageio-ffmpeg 附的（pip install imageio-ffmpeg）。"""
    p = shutil.which('ffmpeg')
    if p:
        return p
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit('找不到 ffmpeg：請安裝 ffmpeg，或執行 pip install imageio-ffmpeg')
from common import load_js_object, scene_dirs, audio_items, audio_key

# 角色聲音代碼 → Kokoro 聲音。要新增角色聲音就在這裡加一行，場景裡的 speakers.voice 填左邊的代碼。
VOICES = {'f': 'af_heart', 'm': 'am_michael', 'f2': 'af_bella', 'm2': 'am_adam', 'f3': 'af_nicole', 'm3': 'am_eric'}
SPEED = {False: 0.95, True: 1.25}


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    check, prune = '--check' in sys.argv, '--prune' in sys.argv
    dirs = [d for d in scene_dirs() if not args or os.path.basename(d) in args]
    todo = []
    for d in dirs:
        S = load_js_object(os.path.join(d, 'scene.js'), 'SCENE')
        os.makedirs(os.path.join(d, 'audio'), exist_ok=True)
        want = {}
        for voice, fast, text in audio_items(S):
            if voice not in VOICES:
                sys.exit('%s：聲音代碼 %s 沒有定義，請加到 VOICES' % (os.path.basename(d), voice))
            want[audio_key(voice, fast, text) + '.mp3'] = (voice, fast, text)
        have = set(f for f in os.listdir(os.path.join(d, 'audio')) if f.endswith('.mp3'))
        missing = [(os.path.join(d, 'audio', f),) + want[f] for f in want if f not in have]
        unused = sorted(have - set(want))
        print('%-22s 需要 %3d 句，缺少 %3d，沒用到 %3d' % (os.path.basename(d), len(want), len(missing), len(unused)))
        if prune and not check:
            for f in unused:
                os.remove(os.path.join(d, 'audio', f))
        todo += missing
    if check or not todo:
        return
    from kokoro_onnx import Kokoro
    import soundfile as sf
    FFMPEG = find_ffmpeg()
    md = os.environ.get('KOKORO_DIR', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models'))
    k = Kokoro(os.path.join(md, 'kokoro-v1.0.int8.onnx'), os.path.join(md, 'voices-v1.0.bin'))
    for n, (path, voice, fast, text) in enumerate(todo, 1):
        samples, sr = k.create(text, voice=VOICES[voice], speed=SPEED[fast], lang='en-us')
        wav = path + '.wav'
        sf.write(wav, samples, sr)
        subprocess.run([FFMPEG, '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-ar', '24000', '-b:a', '48k', path], check=True)
        os.remove(wav)
        print('[%d/%d] %s' % (n, len(todo), text[:60]), flush=True)


if __name__ == '__main__':
    main()
