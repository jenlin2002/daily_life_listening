import json, os, re
root = r'H:\githubdata\daily_life_listening\scenes'
V = {
 'party': [('7t6lUpPFYv4', 'Meeting New People – English Conversation (EverydayEnglish)'),
           ('e0iAJA5nGfU', 'How to Approach Strangers at a Party (The School of Life)'),
           ('6K9LhzyLUfY', 'Start a Conversation with Anyone: Conversation Starters (Vanessa Van Edwards)')],
 'roommates': [('qf11eKAByJQ', 'Cooking Dinner Together – English Conversation for Beginners (Raw English Podcast)'),
               ('yupA8rEwBCo', 'Cooking Dinner Together – Daily English Conversation (English Tales & Lessons)')],
 'clothing-store': [('kdQYKdbAiFs', '5-Minute English Conversation Practice: Shopping for Clothes (English Together)'),
                    ('ad8a2BiXulw', 'Shopping for Clothes – English Conversation (EverydayEnglish)'),
                    ('aWSg7MsHYpU', 'Shopping for Clothes: Colours & Sizes (Lina’s Classroom Story)')],
 'repair-request': [('kZo60WEMQG0', 'English Practice for Intermediate Students – Air Conditioner Repair (Bare English)'),
                    ('AlEV5-atmwY', 'Air conditioner not working? What to do when landlords won’t take action (CBS Texas)')],
 'hotel': [('wyqfYJX23lg', 'English for Hotel and Tourism: Checking into a Hotel (LinguaTV)'),
           ('qtC5Rv39IPo', 'How to Check In at a Hotel in English (Jon Peng English)'),
           ('MYX7RVOf3Yc', 'Let’s Learn English at a Hotel! (Learn English with Bob the Canadian)')],
 'seeing-a-doctor': [('44SL8i8h0dg', 'At the Doctor – English Conversation (Sunshine English)'),
                     ('SV9tcFSOriA', 'How to Describe Your Symptoms in English – Doctor & Patient Conversation (Elite English Learning)'),
                     ('fXvCqjwPlrY', 'Learn English at the Doctor: Describe Your Symptoms (SpeakEase English)')],
 'renting-a-car': [('mKci2gErqJo', 'How to Rent a Car in English – Travel English ESL Conversations (Pocket Passport)'),
                   ('v4qGmZUd4gk', 'Travel English: Rental Car Role Play (Single Step English)'),
                   ('XoPTeF2C99o', 'Car Rental English Conversation at the Airport (Fun Time Institute)')],
 'small-talk': [('WGoIoDuf83o', 'How to Make GREAT Small Talk – English Conversation Practice (mmmEnglish)'),
                ('Qe5Flg_xXvo', 'How to Make Small Talk So Fun, It’s Hard to End the Conversation (Tom Bidgood)'),
                ('9X4mQFDFutc', '5-Minute English Conversation Practice: Small Talk with a Friend (English Together)')],
 'heart-to-heart': [('HheqvK66QPk', 'English Conversation: Breakup & Relationship Talk (English With America)'),
                    ('j2BaAg8jUiM', 'How to Comfort a Friend Who Is Hurting – What to Say (How Communication Works)'),
                    ('frSClA4GUMM', '6 Things to Say When Someone’s in Pain (Psych2Go)')],
 'blind-date': [('GlTQyAylpJM', 'Real English Conversations: First Date at a Restaurant (Speak Easy English)'),
                ('0JpcPMk9ndo', 'Questions to Ask on the First Date (Vanessa Van Edwards)'),
                ('y_pGong8-68', 'What to Talk About on a Date (The School of Life)')],
 'invitations': [('UFnQ0gxef2A', 'Conversational English – Invitations (American English)'),
                 ('KwuKFEsDNE0', 'Accepting and Declining Invitations in English (Learn Authentic English)'),
                 ('qV3Hp7Ecpok', 'Accepting or Rejecting Invitations in English (Learn English with Cambridge)')],
 'job-interview': [('yBtMwyQFXwA', 'How to Interview for a Job in American English, Part 1 (Rachel’s English)'),
                   ('-AOQl94ZYn8', 'Common Questions You’ll Be Asked During an English Job Interview (Bob the Canadian)'),
                   ('0k0Uc9uAJwk', 'Job Interview in English – Questions and Answers (Sunshine English)')],
 'coworkers': [('cZcwcRgKK-o', 'English Small Talk for Fridays and Mondays at Work or School (Bob the Canadian)'),
               ('_Ze0Dfu7ync', 'Conversation Starters at Work – How to Make Small Talk at Work (CareerShakers)'),
               ('4zXys7i8Zrc', 'English Small Talk for Work and with Friends, Family and Strangers (Bob the Canadian)')],
 'news-chat': [('-6Pob2fk6wY', 'The News – English Conversation (Pocket Passport)'),
               ('tJ-aDpTppXA', 'News – Good News, Bad News – Easy Conversation (LearnAmericanEnglish)'),
               ('CDtQuehc74I', 'How to Talk About the News in English – Real Conversation Practice (Real Talk English)')],
 'values-talk': [('R1vskiVDwl4', '10 Ways to Have a Better Conversation (Celeste Headlee, TED)'),
                 ('l-Yy6poJ2zs', 'How Culture Drives Behaviours (Julien S. Bourrelle, TEDx)'),
                 ('zQvqDv4vbEg', 'How Cultural Differences Affect Business (Erin Meyer)')],
}
for slug, vids in V.items():
    p = os.path.join(root, slug, 'scene.js')
    t = open(p, encoding='utf-8').read()
    if '"videos"' in t:
        print(slug, 'already has videos'); continue
    block = '  "videos": [\n' + ',\n'.join('    {\n      "id": %s,\n      "title": %s\n    }' % (json.dumps(i), json.dumps(ti, ensure_ascii=False)) for i, ti in vids) + '\n  ],\n'
    m = re.search(r'^  "speakers": \{', t, re.M)
    if not m:
        print(slug, 'NO speakers anchor'); continue
    t = t[:m.start()] + block + t[m.start():]
    open(p, 'w', encoding='utf-8', newline='').write(t)
    print(slug, 'added', len(vids))
