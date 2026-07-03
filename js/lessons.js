/* Lesson content for Meni v0.
   Writing rules (spec Section 13): roughly 5th grade reading level,
   2–3 sentences per teaching screen, one concept only, warm and direct,
   no jargon, translation-ready, trauma-informed. No scores, no X marks.
   Early lessons have no wrong answers — every choice gets a warm response.

   Lesson shape:
     id        unique string
     title     lesson title
     teach     2–3 sentence teaching text
     question  one question
     answers   [{ label, response }] — exactly two big buttons
     alert     true ONLY for scam-spotting lessons (reserved red styling)
     skill     plain-words "I can..." line the lesson earns (My skills list)
     share     optional teach-back prompt shown after the answer
     mission   optional try-it-in-real-life prompt shown after the answer

   Array order = day order. Ids are permanent labels, not positions
   (core-11 and core-12 were added before the core-10 recap on purpose).
*/

const CORE_LESSONS = [
  {
    id: "core-1",
    skill: "I know I have already used AI.",
    title: "AI is already in your life",
    teach:
      "AI stands for artificial intelligence. You have probably used it for years — it helps choose what you see when you search the internet.",
    question: "Have you ever used Google?",
    answers: [
      {
        label: "Yes",
        response: "Then you've already used AI! It has been helping you all along.",
      },
      {
        label: "Not sure",
        response: "That's okay! Tomorrow we'll look at it together.",
      },
    ],
  },
  {
    id: "core-2",
    skill: "I can talk to AI in plain words.",
    title: "Talking to AI is like ordering food",
    teach:
      "You can talk to AI in plain words, like ordering food. The clearer your order, the more you get what you want — no computer words needed.",
    question: "Which order gets you the right sandwich?",
    answers: [
      {
        label: "“A turkey sandwich, no onions, please”",
        response:
          "Yes! Clear and simple. AI works the same way — just say what you want in plain words.",
      },
      {
        label: "“Some food, please”",
        response:
          "That works too, but you might get anything! Adding a little detail helps you get just what you want.",
      },
    ],
  },
  {
    id: "core-3",
    skill: "I can ask AI a clear question.",
    title: "Asking a good question",
    teach:
      "AI gives better answers when you add a little detail. Instead of “write a letter,” try “write a short, friendly letter to my granddaughter.”",
    question: "Which question will get a better answer?",
    answers: [
      {
        label: "“Write a short thank-you note to my neighbor for the soup”",
        response:
          "Exactly right! Those details help AI write it just the way you want.",
      },
      {
        label: "“Write something nice”",
        response:
          "That's a fine start! Adding a few details, like who it's for, makes the answer even better.",
      },
    ],
  },
  {
    id: "core-4",
    skill: "I know to double-check what AI says.",
    title: "Check what AI tells you",
    teach:
      "AI sounds confident, but it can be wrong — sometimes it makes things up. For big things like health or money, check with a person you trust.",
    question: "AI tells you a fact about a new medicine. What is a good next step?",
    answers: [
      {
        label: "Ask my doctor or pharmacist first",
        response:
          "Exactly. AI is a helper, not a doctor. Checking with a person you trust is always smart.",
      },
      {
        label: "Believe it right away",
        response:
          "It's tempting — AI sounds so sure of itself! But it can be wrong, so checking with your doctor first keeps you safe.",
      },
    ],
  },
  {
    id: "core-5",
    skill: "I know AI makes mistakes — and I decide.",
    title: "AI makes mistakes",
    teach:
      "AI learned from things people wrote, and people make mistakes. So remember: AI suggests, and you decide.",
    question: "Who makes the final decision, you or the AI?",
    answers: [
      {
        label: "Me",
        response: "Right! AI is your helper. You always get the final say.",
      },
      {
        label: "The AI",
        response:
          "It can feel that way, but no — you are always in charge. AI only suggests. You decide.",
      },
    ],
  },
  {
    id: "core-6",
    skill: "I know I can't break AI by asking.",
    title: "You can't break it",
    teach:
      "Many people worry they will press a wrong button and break something. You can't break AI by asking questions — asking is always safe.",
    question: "What happens if you ask AI a silly question?",
    answers: [
      {
        label: "Nothing bad — it just answers",
        response: "Exactly! There are no wrong questions. Feel free to try anything.",
      },
      {
        label: "It might break",
        response:
          "Good news: it won't! You can ask anything, and nothing bad happens. That's a promise.",
      },
    ],
  },
  {
    id: "core-7",
    skill: "I can ask AI to try again.",
    title: "If the answer isn't right, ask again",
    teach:
      "Sometimes AI's first answer is not what you wanted. That's normal — just ask again with different words, like giving directions.",
    question: "AI's answer was too long and confusing. What can you do?",
    answers: [
      {
        label: "Say: \u201cMake it shorter and simpler\u201d",
        response:
          "Perfect! AI never gets tired or annoyed. You can ask again as many times as you like.",
      },
      {
        label: "Give up",
        response:
          "No need! AI never gets tired of trying again. Just say \u201cmake it shorter\u201d and see what happens.",
      },
    ],
  },
  {
    id: "core-8",
    skill: "I keep my passwords and numbers private.",
    share: "Fun idea: ask someone you know if they knew this rule. Now you can teach it!",
    title: "Keep your private things private",
    teach:
      "AI only knows what you type to it. Keep passwords, bank numbers, and your Social Security number to yourself — no honest helper ever needs them.",
    question: "Should you tell AI your bank password?",
    answers: [
      {
        label: "No, I keep passwords to myself",
        response:
          "Right! No real helper — human or AI — ever needs your password. You've got this.",
      },
      {
        label: "Maybe, if it asks nicely",
        response:
          "It never should ask! If anything asks for a password or bank number, that's your sign to stop and check with a person you trust.",
      },
    ],
  },
  {
    id: "core-9",
    skill: "I know photos can be faked now.",
    share: "Fun idea: ask someone you know if they can always tell a fake photo. You know the trick now!",
    title: "Pictures can be made up now",
    teach:
      "AI can now make photos and videos that look real but never happened. If a picture seems shocking or strange, it's smart to wonder: \u201cIs this real?\u201d",
    question: "You see an unbelievable photo online. What's a good first thought?",
    answers: [
      {
        label: "\u201cI wonder if this is real\u201d",
        response:
          "That's exactly the right instinct. Wondering first is a superpower these days.",
      },
      {
        label: "\u201cPhotos don't lie\u201d",
        response:
          "They used to be more trustworthy! These days AI can make fake photos, so wondering first keeps you sharp.",
      },
    ],
  },
  {
    id: "core-11",
    skill: "I can talk to my phone instead of typing.",
    mission: "Try it today: tap the little microphone on your keyboard and just say hello.",
    title: "Talk instead of type",
    teach:
      "If typing is hard on your hands, good news: you can talk to AI out loud. Most phone keyboards have a little microphone button — tap it and just speak.",
    question: "Typing hurts your hands today. What can you try?",
    answers: [
      {
        label: "Tap the microphone and speak",
        response:
          "Yes! Speaking works just as well as typing. Your words become text all by themselves.",
      },
      {
        label: "Skip using AI",
        response:
          "No need to skip! The little microphone button lets you talk instead. We can find it together at office hours.",
      },
    ],
  },
  {
    id: "core-12",
    skill: "I know what AI can't do.",
    title: "What AI can't do",
    teach:
      "AI is good with words, but it doesn't know you, and it doesn't have feelings. It can't replace your doctor, your family, or your own good judgment.",
    question: "Who knows what's best for your life?",
    answers: [
      {
        label: "I do",
        response:
          "Exactly. AI is a helpful tool in your hands — and you are the one holding it.",
      },
      {
        label: "The AI",
        response:
          "AI doesn't even know your name unless you tell it! You know your life best. AI just helps with the words along the way.",
      },
    ],
  },
  {
    id: "core-10",
    skill: "I finished the AI basics.",
    title: "Look how far you've come",
    teach:
      "You now know what AI is, how to talk to it, and how to check its answers. That's more than most people know — truly.",
    question: "Ready to keep going with everyday examples?",
    answers: [
      {
        label: "Yes, let's keep going",
        response:
          "Wonderful! From here, each lesson shows AI helping with real, everyday things.",
      },
      {
        label: "I'd like to review first",
        response:
          "A great idea. Bring any question to office hours, and we'll review together — that's exactly what it's for.",
      },
    ],
  },
];

/* Packs: the facilitator picks one at setup. Same lesson engine,
   different example emphasis. The learner never sees pack names
   or audience labels anywhere in the app. */

const PACKS = {
  everyday: [
    {
      id: "ev-1",
      skill: "I can spot a scam message.",
      title: "Spotting a scam message",
      alert: true,
      teach:
        "Scammers use AI to write messages that look very real. A scam almost always rushes you — real banks and real family do not rush you for money or codes.",
      question:
        "A text says: “Grandma, I'm in trouble, send gift cards right now!” What do you do?",
      answers: [
        {
          label: "Stop and call my family member at their usual number",
          response:
            "Perfect. Stopping and calling the person yourself beats any scam. You just protected yourself.",
        },
        {
          label: "Send the gift cards quickly",
          response:
            "That rush is the trick — the message is built to scare you. Stop, take a breath, and call your family member at the number you know.",
        },
      ],
    },
    {
      id: "ev-2",
      skill: "I can get ready for a doctor visit with AI.",
      title: "Getting ready for the doctor",
      teach:
        "AI can help you get ready for a doctor visit. Ask it: “Help me make a list of questions about my knee pain.”",
      question: "What is AI good for before a doctor visit?",
      answers: [
        {
          label: "Helping me write down my questions",
          response:
            "Yes! AI helps you get organized, and your doctor gives the medical advice. A great team.",
        },
        {
          label: "Taking the place of the doctor",
          response:
            "Not quite — no AI can take your doctor's place. But it is wonderful at helping you prepare your questions.",
        },
      ],
    },
    {
      id: "ev-3",
      skill: "I know the gift card rule.",
      share: "Fun idea: ask someone you know if they have heard the gift card rule. You can teach it now!",
      title: "The gift card rule",
      alert: true,
      teach:
        "Here is a rule that beats almost every scam: nobody honest ever asks to be paid in gift cards. Not banks, not the government, not tech support — nobody.",
      question: "A caller says you owe money and must pay with gift cards. What is it?",
      answers: [
        {
          label: "A scam — honest people never ask for gift cards",
          response:
            "Exactly right. You can hang up without another word. That rule protects you every time.",
        },
        {
          label: "Maybe real — better pay fast",
          response:
            "It feels urgent — that's the trick. Remember the rule: gift cards as payment always means scam. Hang up and breathe.",
        },
      ],
    },
    {
      id: "ev-4",
      skill: "I know how to beat a fake voice call.",
      share: "Fun idea: talk with your family about picking a secret code word together.",
      title: "A voice that sounds like family",
      alert: true,
      teach:
        "AI can copy a person's voice from a short recording. If a call sounds like family asking for money, hang up and call them back at the number you know.",
      question:
        "The voice on the phone sounds just like your grandson asking for money. What do you do?",
      answers: [
        {
          label: "Hang up and call him at his usual number",
          response:
            "Perfect. Calling back at the number you know beats any voice trick. Some families even pick a secret code word.",
        },
        {
          label: "Send money right away",
          response:
            "Voices can be faked now, even a loved one's. Hang up first, then call them yourself — if it's real, they'll understand.",
        },
      ],
    },
    {
      id: "ev-5",
      skill: "I can write a warm message with AI's help.",
      title: "A birthday message with help",
      teach:
        "AI is lovely for special messages. Try: \u201cHelp me write a short, warm birthday message for my sister who loves her garden.\u201d",
      question: "What makes the message feel like you?",
      answers: [
        {
          label: "The little details only I know",
          response:
            "Yes! You bring the love and the details. AI just helps arrange the words.",
        },
        {
          label: "AI adds them by itself",
          response:
            "AI doesn't know your sister — you do! Give it your details, and the message will sound just like you.",
        },
      ],
    },
    {
      id: "ev-6",
      skill: "I can get an official letter explained in plain words.",
      title: "Official letters in plain words",
      teach:
        "Official letters can be full of confusing words. You can read one to AI and ask: \u201cExplain this letter in plain, simple words.\u201d",
      question: "A letter from an office confuses you. What can you try?",
      answers: [
        {
          label: "Ask AI to explain it simply",
          response:
            "Yes! And for big decisions, bring the letter to office hours too — two helpers are better than one.",
        },
        {
          label: "Put it in a drawer",
          response:
            "Very tempting! But AI can take the scary out of it in one minute. And you can always bring it to office hours.",
        },
      ],
    },
    {
      id: "ev-7",
      skill: "I can get big medical words explained.",
      title: "Big words from the doctor",
      teach:
        "Doctors sometimes use words nobody knows. Ask AI: \u201cWhat does hypertension mean, in plain words?\u201d — then check anything important with your doctor.",
      question: "Who gives the final medical answer?",
      answers: [
        {
          label: "My doctor",
          response:
            "Right. AI explains the words, your doctor takes care of you. A good team, in that order.",
        },
        {
          label: "The AI",
          response:
            "AI is great with words, but your doctor knows you. Use AI to understand, and your doctor to decide.",
        },
      ],
    },
    {
      id: "ev-8",
      skill: "I know prize-fee messages are scams.",
      share: "Fun idea: tell someone you know: real prizes never ask for money first.",
      title: "Too good to be true",
      alert: true,
      teach:
        "\u201cYou won a prize! Just pay a small fee.\u201d Real prizes never ask for money first — that request is the whole scam.",
      question: "A message says you won, but you must pay to collect. Real or scam?",
      answers: [
        {
          label: "Scam — winners never pay first",
          response:
            "Exactly. Delete it and feel good — you just kept your money safe.",
        },
        {
          label: "Could be real",
          response:
            "It's designed to make you hope! But real prizes never charge a fee. Paying to win always means scam.",
        },
      ],
    },
    {
      id: "ev-9",
      skill: "I can get everyday ideas from AI.",
      mission: "Try it today: ask an AI for three easy dinner ideas.",
      title: "Dinner ideas in ten seconds",
      teach:
        "AI is handy for small things too. Try: \u201cGive me three easy dinner ideas with chicken and rice.\u201d",
      question: "Want to make the ideas fit you better?",
      answers: [
        {
          label: "Add what I like: \u201cnothing spicy, please\u201d",
          response:
            "Perfect! The more you tell it, the better it fits you. Just like a good waiter.",
        },
        {
          label: "Take whatever it gives",
          response:
            "That works! And whenever you want, you can add \u201cnothing spicy\u201d or \u201csomething quick\u201d — it adjusts instantly.",
        },
      ],
    },
    {
      id: "ev-10",
      skill: "I am ready for my first real AI conversation.",
      title: "Your first real conversation",
      teach:
        "You know enough now to try AI for real — and you don't have to do it alone. At office hours, we'll open an AI together and you'll ask your first question.",
      question: "What question would you like to try first?",
      answers: [
        {
          label: "I have one — I'll save it below",
          response:
            "Wonderful! Tap \u201cSave this question for Meni\u201d and bring your phone. We'll try it together.",
        },
        {
          label: "I'm not sure yet",
          response:
            "That's completely fine. Come anyway — we'll find a fun first question together.",
        },
      ],
    },
  ],
  work: [
    {
      id: "wk-1",
      skill: "I can build my resume with AI's help.",
      title: "AI can help with your resume",
      teach:
        "A resume is a short list of what you can do. You bring the true facts, and AI helps you say them clearly and proudly.",
      question: "What do you give AI so it can help with your resume?",
      answers: [
        {
          label: "The true facts about my work and skills",
          response:
            "Exactly. You bring the truth, and AI helps with the words. That's a strong team.",
        },
        {
          label: "Nothing — it already knows me",
          response:
            "Good thing to check! AI does not know you at all, and that's good for your privacy. It only knows what you choose to tell it.",
        },
      ],
    },
    {
      id: "wk-2",
      skill: "I can practice interviews with AI.",
      title: "Practicing for an interview",
      teach:
        "You can practice a job interview with AI. Ask it: “Ask me three common interview questions for a kitchen job.”",
      question: "Would you like to try a practice question at office hours?",
      answers: [
        {
          label: "Yes, I'd like that",
          response:
            "Wonderful! Tap “Save this question” below and you can practice together at office hours.",
        },
        {
          label: "Maybe later",
          response:
            "That is completely fine. The idea will be here whenever you're ready.",
        },
      ],
    },
    {
      id: "wk-3",
      skill: "I can practice \u201ctell me about yourself.\u201d",
      title: "Practice: tell me about yourself",
      teach:
        "Almost every interview starts with \u201ctell me about yourself.\u201d You can practice with AI: \u201cHelp me practice answering that for a cleaning job.\u201d",
      question: "What makes practice work best?",
      answers: [
        {
          label: "Saying my answer out loud",
          response:
            "Yes! Out loud is how confidence grows. AI gives you a safe place to practice first.",
        },
        {
          label: "Just reading about it",
          response:
            "Reading helps, but saying it out loud works better. AI will listen as many times as you need — no judgment ever.",
        },
      ],
    },
    {
      id: "wk-4",
      skill: "I can write a short letter for a job.",
      title: "A letter that opens doors",
      teach:
        "A short letter with a job application shows you care. Tell AI the true facts: \u201cHelp me write three sentences about why I'd be good at this kitchen job.\u201d",
      question: "What do you bring to the letter?",
      answers: [
        {
          label: "My true skills and my interest",
          response:
            "Exactly. Truth plus good words is a strong combination. AI helps with the words.",
        },
        {
          label: "Nothing — AI writes it alone",
          response:
            "AI without your truth writes an empty letter. Give it your real skills — then it shines.",
        },
      ],
    },
    {
      id: "wk-5",
      skill: "I can get lease words explained in plain words.",
      title: "Understanding a lease",
      teach:
        "Leases are full of heavy words. You can ask AI: \u201cWhat does this sentence from my lease mean, in plain words?\u201d",
      question: "For a big housing problem, what's the strongest move?",
      answers: [
        {
          label: "Understand it with AI, then get real help",
          response:
            "Right. AI explains, and for big steps, a legal aid office or a trusted person stands with you.",
        },
        {
          label: "Do nothing",
          response:
            "Understandable — heavy words are tiring. But one plain-words explanation can make the next step feel possible. Office hours can help too.",
        },
      ],
    },
    {
      id: "wk-6",
      skill: "I can write a clear note to a school.",
      title: "Writing to a school",
      teach:
        "A note to a teacher works best short and clear. Try: \u201cHelp me write a short, polite note asking how my child is doing in math.\u201d",
      question: "Which note gets a better answer?",
      answers: [
        {
          label: "Short, kind, and specific",
          response:
            "Yes! Teachers are busy — short and specific gets answered. AI is great at short and kind.",
        },
        {
          label: "Long, with everything at once",
          response:
            "Tempting to say it all! But short notes get read first. AI can help you pick the one thing that matters most today.",
        },
      ],
    },
    {
      id: "wk-7",
      skill: "I can get form questions explained.",
      title: "Forms without fear",
      teach:
        "Forms ask confusing things like \u201cmarital status\u201d or \u201creferences.\u201d You can ask AI what any form question means before you answer it.",
      question: "A form question makes no sense to you. What can you do?",
      answers: [
        {
          label: "Ask AI what it means in plain words",
          response:
            "Exactly. Understand first, answer second. And blank spots can wait for office hours.",
        },
        {
          label: "Guess and hope",
          response:
            "We've all done it! But a quick \u201cwhat does this mean?\u201d takes ten seconds — and office hours can finish any form with you.",
        },
      ],
    },
    {
      id: "wk-8",
      skill: "I know real jobs never charge me.",
      share: "Fun idea: tell someone you know: real jobs pay you, never the other way around.",
      title: "Jobs that ask for money",
      alert: true,
      teach:
        "Real jobs pay you — never the other way around. Any \u201cjob\u201d that asks for a fee, gift cards, or your bank password is a scam.",
      question: "A job offer asks for $50 to \u201chold your spot.\u201d What is it?",
      answers: [
        {
          label: "A scam — real jobs never charge you",
          response:
            "Exactly right. Walk away proud — you just protected your money.",
        },
        {
          label: "A fair deal",
          response:
            "It's built to sound fair! But real employers never charge workers to start. Money flowing the wrong way always means scam.",
        },
      ],
    },
    {
      id: "wk-9",
      skill: "I can learn anything step by step with AI.",
      mission: "This week, try it: ask AI to explain something new, step by step.",
      title: "Learning anything, step by step",
      teach:
        "AI can teach at your speed. Try: \u201cExplain how to use email, step by step, like I'm brand new.\u201d",
      question: "The steps go too fast. What do you say?",
      answers: [
        {
          label: "\u201cSlower, one step at a time\u201d",
          response:
            "Perfect. AI never sighs, never rushes you. It goes exactly at your speed, every time.",
        },
        {
          label: "Nothing — I stop",
          response:
            "You'd be missing your best student trick: just say \u201cslower, please.\u201d AI happily starts over, every single time.",
        },
      ],
    },
    {
      id: "wk-10",
      skill: "I am ready for my first real AI conversation.",
      title: "Your first real conversation",
      teach:
        "You know enough now to try AI for real — and you don't have to do it alone. At office hours, we'll open an AI together and you'll ask your first question.",
      question: "What question would you like to try first?",
      answers: [
        {
          label: "I have one — I'll save it below",
          response:
            "Wonderful! Tap \u201cSave this question for Meni\u201d and bring your phone. We'll try it together.",
        },
        {
          label: "I'm not sure yet",
          response:
            "That's completely fine. Come anyway — we'll find a fun first question together.",
        },
      ],
    },
  ],
};

/* The mini-courses: after the core course and the chosen pack, every
   learner continues through the same eight themed units (six lessons
   each). With watering days, the full sequence covers about three
   months of daily visits. `unit` is a short label shown next to the
   day number so learners feel the chapters turn. */

const EXTENDED_LESSONS = [
  /* ---- Unit 1: Staying safe (scams beyond AI) ---- */
  {
    id: "safe-1",
    unit: "Staying safe",
    skill: "I don't tap links I didn't ask for.",
    title: "Links you didn't ask for",
    alert: true,
    teach:
      "Scammers send texts like “your package is stuck — tap here.” Here's the rule: if you didn't ask for the message, don't tap the link. Go to the real website or app yourself instead.",
    question: "A text from “the post office” has a link. You ordered nothing. What do you do?",
    answers: [
      {
        label: "Delete it — I didn't ask for it",
        response:
          "Exactly right. No real package was ever lost by deleting a scam text. You're in charge.",
      },
      {
        label: "Tap it to check, just in case",
        response:
          "That “just in case” feeling is what they count on. If you're truly curious, go to the real website yourself — never through their link.",
      },
    ],
  },
  {
    id: "safe-2",
    unit: "Staying safe",
    skill: "I call my bank at the number on my card.",
    title: "The bank never rushes you",
    alert: true,
    teach:
      "A call says it's your bank and your account is “in danger — act now!” Real banks don't rush you. Hang up and call the number printed on the back of your bank card.",
    question: "“Your account is frozen, verify your details now!” What's your move?",
    answers: [
      {
        label: "Hang up and call the number on my card",
        response:
          "Perfect. The number on your card always reaches your real bank. Nothing urgent is ever lost by hanging up first.",
      },
      {
        label: "Give my details — it sounds serious",
        response:
          "It's built to sound serious — fear is their tool. Your real bank already has your details. Hang up, breathe, and call the number on your card.",
      },
    ],
  },
  {
    id: "safe-3",
    unit: "Staying safe",
    skill: "I'm careful with QR codes from strangers.",
    title: "Little squares, big doors",
    alert: true,
    teach:
      "Those square QR codes are doors — your phone opens whatever is behind them. A code on a menu at your table is fine; a sticker slapped on a parking meter or a flyer might lead somewhere bad.",
    question: "A flyer on your car says “scan to claim your reward.” Scan it?",
    answers: [
      {
        label: "No — I don't know whose door that is",
        response:
          "Well spotted. Strange rewards from strangers follow the old rule: too good to be true.",
      },
      {
        label: "Sure, it's just a picture",
        response:
          "It looks like just a picture, but it opens a door. When you don't know who put it there, it's fine to simply walk on by.",
      },
    ],
  },
  {
    id: "safe-4",
    unit: "Staying safe",
    skill: "I know an online friend who asks for money is a warning sign.",
    title: "A friend you've never met",
    alert: true,
    teach:
      "Some scammers build a friendship first — kind messages for weeks, sometimes with AI doing the writing. Then comes a small emergency and a request for money. The friendship was the trick.",
    question: "An online friend you've never met in person asks for money. What is that?",
    answers: [
      {
        label: "A warning sign — real friends don't start there",
        response:
          "Yes. It can hurt, because the kindness felt real. Anyone can be fooled by this one — spotting it makes you strong, not cold.",
      },
      {
        label: "Just a friend in need",
        response:
          "A kind heart is nothing to be ashamed of. But money requests from someone you've never met are the oldest pattern there is. Talk to a person you trust before sending anything.",
      },
    ],
  },
  {
    id: "safe-5",
    unit: "Staying safe",
    skill: "I know what to do if a scam gets me — and it's never my fault.",
    title: "If it already happened",
    alert: true,
    teach:
      "Scams catch smart, careful people every day — that's why they work. If one catches you: tell someone you trust right away, and call your bank using the number on your card. Fast beats embarrassed.",
    question: "What matters most right after a scam?",
    answers: [
      {
        label: "Acting fast — telling someone and calling the bank",
        response:
          "Exactly. Every hour counts, and there is no shame in it — the criminal is the only one who did something wrong.",
      },
      {
        label: "Keeping it to myself",
        response:
          "So many people feel that way — and it's exactly what scammers hope for. Telling someone fast can get money back. It's never your fault.",
      },
    ],
  },
  {
    id: "safe-6",
    unit: "Staying safe",
    skill: "I have a scam-spotting toolkit.",
    share: "Fun idea: share one tool from your kit with someone this week — rushing always means stop.",
    title: "Your scam-spotting toolkit",
    teach:
      "Look at what you carry now: rushing means stop. Gift cards mean scam. Didn't ask? Don't tap. Call back at the number you know. That's a real toolkit, and it's yours.",
    question: "Someone rushes you for money or codes. What's the first tool?",
    answers: [
      {
        label: "Stop — rushing is always the sign",
        response:
          "That's the master tool. Every scam needs you to hurry. Your calm is stronger than their script.",
      },
      {
        label: "I'm not sure",
        response:
          "Then here it is, gift-wrapped: when anyone rushes you, stop. Slow is safe. You can always bring the tricky ones to office hours.",
      },
    ],
  },

  /* ---- Unit 2: Health helper ---- */
  {
    id: "health-1",
    unit: "Health helper",
    skill: "I can get test-result words explained.",
    title: "Test results in plain words",
    teach:
      "Test results arrive full of strange words and numbers. You can ask AI: “What does LDL cholesterol mean, in plain words?” Understanding the words helps you ask your doctor better questions.",
    question: "Who explains the words, and who explains YOUR results?",
    answers: [
      {
        label: "AI explains words; my doctor explains my results",
        response:
          "Beautifully put. AI knows the dictionary; your doctor knows you. Keep them in that order.",
      },
      {
        label: "AI can do both",
        response:
          "AI is great with the dictionary part, but it has never met you. Your numbers, your history, your body — that reading belongs to your doctor.",
      },
    ],
  },
  {
    id: "health-2",
    unit: "Health helper",
    skill: "I can describe my symptoms clearly with AI's help.",
    mission: "Before your next visit, try it: ask AI to help you list what you want to tell the doctor.",
    title: "Say it clearly at the doctor's",
    teach:
      "Doctor visits are short, and it's easy to forget what you meant to say. Before the visit, tell AI what's been bothering you and ask: “Help me say this clearly and briefly.”",
    question: "What makes a short doctor visit count?",
    answers: [
      {
        label: "Arriving with my points already clear",
        response:
          "Yes! A little preparation turns ten rushed minutes into ten useful ones. AI is a patient helper for that.",
      },
      {
        label: "Hoping I remember everything",
        response:
          "We've all walked out saying “I forgot to mention…!” A short list, prepared calmly at home, fixes that forever.",
      },
    ],
  },
  {
    id: "health-3",
    unit: "Health helper",
    skill: "I ask my pharmacist before changing anything.",
    title: "Questions about your medicines",
    teach:
      "AI can help you prepare questions about your medicines: “What should I ask the pharmacist about taking these two together?” But never change a dose because AI said so — that call belongs to your doctor or pharmacist.",
    question: "AI suggests your medicine timing could change. What do you do?",
    answers: [
      {
        label: "Ask my pharmacist before changing anything",
        response:
          "Exactly. AI helps you ask better questions — real people with your chart give the answers.",
      },
      {
        label: "Change it — AI sounded sure",
        response:
          "AI always sounds sure; that's its way. But it can't see your chart or your history. Your pharmacist can, and loves being asked.",
      },
    ],
  },
  {
    id: "health-4",
    unit: "Health helper",
    skill: "I doubt miracle cures online.",
    alert: true,
    title: "Miracle cures aren't miracles",
    teach:
      "The internet is full of posts about miracle cures — many now written by AI to sound convincing. If it promises to cure everything, costs money, and says doctors are hiding it: that's a sales pitch, not medicine.",
    question: "A post says one supplement cures arthritis, diabetes, and memory loss. What is it?",
    answers: [
      {
        label: "A sales pitch dressed up as news",
        response:
          "Right. One thing that cures everything has never existed. Your skepticism is good medicine.",
      },
      {
        label: "Worth trying — what's the harm?",
        response:
          "The harm can be your money and your health. Anything that big deserves one question first: “Doctor, is this real?”",
      },
    ],
  },
  {
    id: "health-5",
    unit: "Health helper",
    skill: "I can ask AI for gentle, healthy ideas.",
    mission: "Try it today: ask AI for one gentle stretch you can do sitting in a chair.",
    title: "Small healthy ideas",
    teach:
      "AI is good at small, kind suggestions: “Give me three gentle chair exercises,” or “an easy soup with lots of vegetables.” Small steps you actually take beat big plans you don't.",
    question: "Which request fits real life better?",
    answers: [
      {
        label: "“One gentle stretch I can do while seated”",
        response:
          "Perfect. Small and doable wins every time. And AI never judges where you're starting from.",
      },
      {
        label: "“A complete fitness transformation plan”",
        response:
          "Ambitious! But big plans often stay on paper. Ask for one small thing today — and another tomorrow. That's how gardens grow.",
      },
    ],
  },
  {
    id: "health-6",
    unit: "Health helper",
    skill: "I know hard feelings deserve a human.",
    title: "Some things need a person",
    teach:
      "AI can chat anytime, and that's a comfort. But on truly heavy days — grief, worry, loneliness that sits deep — you deserve a human voice. A friend, family, your doctor, or the folks at office hours.",
    question: "On a very hard day, what does your heart deserve?",
    answers: [
      {
        label: "A real person who cares about me",
        response:
          "Yes. AI can keep you company on ordinary days, but hard days deserve warm hands and real voices. Reaching out is strength.",
      },
      {
        label: "I don't like to bother anyone",
        response:
          "So many kind people feel that way. But the people who love you want to be called — being needed is a gift you give them.",
      },
    ],
  },

  /* ---- Unit 3: Writing helper ---- */
  {
    id: "write-1",
    unit: "Writing helper",
    skill: "I can write a firm, polite complaint.",
    title: "A complaint that gets results",
    teach:
      "When something you paid for goes wrong, a clear letter works wonders. Tell AI the facts and ask: “Help me write a firm but polite complaint asking for a refund.” Firm and polite beats angry every time.",
    question: "Which complaint gets taken seriously?",
    answers: [
      {
        label: "Calm, clear, with the facts and what I want",
        response:
          "Exactly. Companies act on clear requests. You bring the facts; AI helps keep it firm and civil.",
      },
      {
        label: "As angry as I feel",
        response:
          "The anger is fair! But angry letters get set aside. Let AI turn your fire into firmness — it works better and feels better too.",
      },
    ],
  },
  {
    id: "write-2",
    unit: "Writing helper",
    skill: "I can find words for hard moments.",
    title: "Words for hard moments",
    teach:
      "Condolence notes and apologies are the hardest writing there is. You can tell AI what you feel and ask for help saying it simply. The feeling is yours; AI just helps it travel.",
    question: "What makes a condolence note comforting?",
    answers: [
      {
        label: "That it's honest and simple",
        response:
          "Yes. “I'm so sorry. I remember when…” — honest and simple always comforts. AI can help you get there when the words won't come.",
      },
      {
        label: "That it's long and formal",
        response:
          "It's a kind thought, but grieving people treasure warmth over length. Three honest sentences beat a formal page.",
      },
    ],
  },
  {
    id: "write-3",
    unit: "Writing helper",
    skill: "I can write an invitation with AI.",
    mission: "Try it this week: ask AI to help you invite someone to coffee, lunch, or a phone call.",
    title: "Inviting someone is easier now",
    teach:
      "An invitation is a little gift: “Come have lunch for my birthday.” If starting feels awkward, tell AI who it's for and the occasion — it will draft something warm you can make your own.",
    question: "What matters most in an invitation?",
    answers: [
      {
        label: "That it actually gets sent",
        response:
          "Ha — exactly! A sent invitation beats a perfect draft. AI helps you past the blank page so the lunch actually happens.",
      },
      {
        label: "That every word is perfect",
        response:
          "People remember the lunch, not the wording. Good enough and sent beats perfect and forgotten — and AI makes good-enough quick.",
      },
    ],
  },
  {
    id: "write-4",
    unit: "Writing helper",
    skill: "I can ask AI to polish without replacing my voice.",
    title: "Keep your own voice",
    teach:
      "You can hand AI something you wrote and say: “Make this clearer, but keep my words where you can.” That way the letter still sounds like you — just tidied up.",
    question: "You wrote a letter but it feels tangled. What do you ask?",
    answers: [
      {
        label: "“Make it clearer but keep my voice”",
        response:
          "Perfect. Your voice is the valuable part — AI is just the polish, never the replacement.",
      },
      {
        label: "“Throw it away and write a new one”",
        response:
          "It can! But then it sounds like everyone's letter. Yours, tidied, will always mean more to the person reading it.",
      },
    ],
  },
  {
    id: "write-5",
    unit: "Writing helper",
    skill: "I can write in one language and send in another.",
    title: "Two languages, one letter",
    teach:
      "Write in the language your heart thinks in, then ask AI: “Translate this naturally.” A letter to an English-speaking office or a Spanish-speaking cousin — both are easy now.",
    question: "You need to write to an office in a language you're less sure of. What's the trick?",
    answers: [
      {
        label: "Write it my way first, then ask AI to translate",
        response:
          "Exactly. Think freely in your own language; let AI carry it across. Nothing gets lost that way.",
      },
      {
        label: "Struggle through in the other language",
        response:
          "You could — but why? Your best thinking happens in your own words. AI is a bridge; walk across it.",
      },
    ],
  },
  {
    id: "write-6",
    unit: "Writing helper",
    skill: "I can turn memories into stories.",
    share: "Fun idea: read one of your memory-stories out loud to someone you love.",
    title: "Your stories are worth keeping",
    teach:
      "You are carrying stories nobody else has — how you met, what the old neighborhood smelled like. Tell one to AI and ask: “Help me shape this into a short story for my family.”",
    question: "Who is the author of those stories?",
    answers: [
      {
        label: "Me — AI just helps with the shaping",
        response:
          "Always you. The memory, the people, the feeling — all yours. AI just helps them sit nicely on the page for the grandchildren.",
      },
      {
        label: "The AI, since it writes it out",
        response:
          "AI never sat in that kitchen or heard that laugh — you did. It's your book; AI is only the typewriter.",
      },
    ],
  },

  /* ---- Unit 4: Real or made up ---- */
  {
    id: "photo-1",
    unit: "Real or made up",
    skill: "I know videos can be faked too.",
    title: "Moving pictures can lie now",
    teach:
      "It's not just photos — AI can now make videos of real people saying things they never said. If a video of a famous person seems shocking or strange, the wondering rule applies: “Is this real?”",
    question: "A video shows a famous doctor selling a miracle product. First thought?",
    answers: [
      {
        label: "“Videos can be faked — I'll check elsewhere”",
        response:
          "Exactly. Famous faces get borrowed by AI all the time now. Your doubt is right on time.",
      },
      {
        label: "“It's video, so it must be real”",
        response:
          "That used to be true! These days a video is just another picture — and pictures can be made up. Wondering first keeps you sharp.",
      },
    ],
  },
  {
    id: "photo-2",
    unit: "Real or made up",
    skill: "I check where a picture came from.",
    title: "The source beats the clues",
    teach:
      "People say “look for six fingers” to spot fake images, but AI improves and the clues fade. The stronger question never fades: WHO is showing me this, and do I trust them?",
    question: "What's the most reliable way to judge a surprising image?",
    answers: [
      {
        label: "Check who published it and whether I trust them",
        response:
          "Yes. Clues age; sources don't. A shocking image from nowhere is just decoration until someone trustworthy confirms it.",
      },
      {
        label: "Zoom in and look for mistakes",
        response:
          "Worth a look, but AI gets better every month and the mistakes disappear. Asking “who's showing me this?” works forever.",
      },
    ],
  },
  {
    id: "photo-3",
    unit: "Real or made up",
    skill: "I pause before forwarding.",
    share: "Fun idea: tell someone the pause rule — a fake only spreads if we pass it along.",
    title: "The pause before you share",
    teach:
      "Fakes only travel because people forward them. Before you pass along a shocking photo or message, pause: “Do I know this is true?” If not, letting it stop with you is a small good deed.",
    question: "A shocking claim arrives in a group chat. Forward it?",
    answers: [
      {
        label: "Not until I know it's true",
        response:
          "That pause makes you part of the solution. News that's true will still be true tomorrow — no rush.",
      },
      {
        label: "Yes — people should see it!",
        response:
          "That generous instinct is exactly what fakes ride on. Check first; if it's real, share proudly then.",
      },
    ],
  },
  {
    id: "photo-4",
    unit: "Real or made up",
    skill: "I can hang up on a robot.",
    alert: true,
    title: "You may hang up on robots",
    teach:
      "Many phone calls now are AI voices reading scripts — some selling, some scamming. Here's your permission slip: hanging up on a robot is not rude. You owe a recording nothing.",
    question: "A recorded voice says you owe taxes and must press 1. What do you do?",
    answers: [
      {
        label: "Hang up — the tax office sends letters, not robots",
        response:
          "Exactly right. Real agencies write letters. Robots demanding money get the click, every time.",
      },
      {
        label: "Press 1 to sort it out",
        response:
          "Pressing 1 just tells them a real person answers this number. Hang up instead — if you ever truly owe something, it arrives by mail.",
      },
    ],
  },
  {
    id: "photo-5",
    unit: "Real or made up",
    skill: "I know AI can help with old photos.",
    mission: "Try it sometime: ask a grandchild or friend to help you sharpen one old family photo with AI.",
    title: "The lovely side of AI pictures",
    teach:
      "The same tools have a lovely side: AI can sharpen a blurry old photograph, add color to a black-and-white one, or help you write down who's who before the names are lost.",
    question: "What's a happy use for AI and your photo box?",
    answers: [
      {
        label: "Restoring old photos and saving the names",
        response:
          "Wonderful, isn't it? The same cleverness that makes fakes can also rescue Grandma's wedding photo. Tools take after their users.",
      },
      {
        label: "AI and photos are only trouble",
        response:
          "After the scam lessons, fair enough! But in your hands these tools restore memories instead of faking them. You get to be the good example.",
      },
    ],
  },
  {
    id: "photo-6",
    unit: "Real or made up",
    skill: "I verify shocking news at places I trust.",
    title: "Your two trusted places",
    teach:
      "Here's a habit worth gold: pick two places you trust for news — a newspaper, a TV station, a radio program. When something shocking arrives, check it there. If neither has it, wait.",
    question: "Shocking news arrives, but your two trusted places have nothing. What now?",
    answers: [
      {
        label: "Wait — real news reaches real newsrooms fast",
        response:
          "Exactly. Big true things never stay exclusive to a forwarded message. Your patience is a fact-checker.",
      },
      {
        label: "Believe it — maybe they're slow",
        response:
          "Newsrooms race each other for big stories. If none of them has it, the story usually isn't a story. Give it a day.",
      },
    ],
  },

  /* ---- Unit 5: Daily life ---- */
  {
    id: "help-1",
    unit: "Daily life",
    skill: "I can get directions in plain words.",
    title: "Directions without the confusion",
    teach:
      "AI explains how-to things at your speed: “How do I return a package? Explain step by step, like I've never done it.” No sighing, no rushing, no “everybody knows that.”",
    question: "The instructions that came in the box make no sense. What can you try?",
    answers: [
      {
        label: "Ask AI to explain it step by step, plainly",
        response:
          "Yes. Instructions are written by people in a hurry — AI rewrites them for humans with lives.",
      },
      {
        label: "Give up on the gadget",
        response:
          "The drawer of abandoned gadgets is real! But one plain-words walkthrough usually saves them. Ask before you drawer it.",
      },
    ],
  },
  {
    id: "help-2",
    unit: "Daily life",
    skill: "I can adapt a recipe with AI.",
    mission: "Try it today: ask AI to shrink a favorite recipe to two servings.",
    title: "Recipes that fit your table",
    teach:
      "Recipes feed six; maybe your table seats two. Ask AI: “Make this recipe for two, and less salt please.” It adjusts everything — amounts, times, all of it.",
    question: "The recipe serves eight. You are two. What do you say?",
    answers: [
      {
        label: "“Make this for two, please”",
        response:
          "And it does the arithmetic instantly — no more thirds of an egg. Cooking for your real table, not the recipe's imaginary one.",
      },
      {
        label: "Cook for eight and eat it all week",
        response:
          "The classic move! Works for soup, tires you by Thursday. “Make it for two” gives you variety back.",
      },
    ],
  },
  {
    id: "help-3",
    unit: "Daily life",
    skill: "I can question a confusing bill.",
    title: "Bills that don't add up",
    teach:
      "When a bill jumps or a charge looks strange, ask AI: “What does this line on my bill usually mean?” Then, if it still looks wrong, call the company — using the number printed on the bill itself.",
    question: "Your phone bill is suddenly $20 higher. What's a strong first step?",
    answers: [
      {
        label: "Ask AI what the new line means, then call the number on the bill",
        response:
          "Perfect order: understand first, then call informed. People who ask clear questions get refunds more often.",
      },
      {
        label: "Just pay it — arguing is exhausting",
        response:
          "It is exhausting — that's what they count on. Two minutes with AI turns confusion into one clear question, and clear questions get money back.",
      },
    ],
  },
  {
    id: "help-4",
    unit: "Daily life",
    skill: "I can translate with AI.",
    title: "Any language, right now",
    teach:
      "A letter, a sign, a label in another language — AI translates instantly. Type it in, or speak it, and ask: “What does this say, in plain words?”",
    question: "A form arrives in a language you don't read. What can you do?",
    answers: [
      {
        label: "Ask AI to translate it plainly",
        response:
          "Yes — and for anything official or important, office hours can double-check the tricky parts with you.",
      },
      {
        label: "Set it aside and worry",
        response:
          "The old way! Now the mystery takes one minute to solve. Translate first, worry only if it's actually worth worrying about.",
      },
    ],
  },
  {
    id: "help-5",
    unit: "Daily life",
    skill: "I can plan an outing with AI.",
    title: "Planning a visit, minus the stress",
    teach:
      "Going to see family, or a day out? AI is a tireless planning partner: “Help me make a packing list for three days,” or “What should I ask the bus company about wheelchair access?”",
    question: "What's a good planning job to hand AI?",
    answers: [
      {
        label: "The list-making — so I only decide the fun parts",
        response:
          "Exactly. AI carries the clipboard; you keep the joy. Lists, questions to ask, what to pack — all its department now.",
      },
      {
        label: "Nothing — planning is worry, and worry is mine",
        response:
          "You'd be surprised how much lighter a trip feels when the list writes itself. Hand over the clipboard once and see.",
      },
    ],
  },
  {
    id: "help-6",
    unit: "Daily life",
    skill: "I can ask AI how to use my phone.",
    mission: "Try it today: ask AI one question about your phone that you've always wondered about.",
    title: "The phone can explain itself",
    teach:
      "Here's a circle worth knowing: you can ask AI how to use the very phone it lives on. “How do I make the text bigger on my phone?” Step-by-step answers, no eye-rolling.",
    question: "You want the phone's screen brighter but can't find the setting. Who can you ask?",
    answers: [
      {
        label: "AI — right there on the phone",
        response:
          "Yes! The phone explains itself now. And whatever AI can't untangle, office hours can — with the phone in hand.",
      },
      {
        label: "Nobody — I'll live with it dim",
        response:
          "You've lived with settings long enough! One question fixes it for good. And office hours exists for exactly these little battles.",
      },
    ],
  },

  /* ---- Unit 6: Clear thinking ---- */
  {
    id: "news-1",
    unit: "Clear thinking",
    skill: "I ask who wrote what I read.",
    title: "Who wrote this?",
    teach:
      "A lot of what you read online now was written by AI — some of it helpful, some of it just filler made to sell ads. A good habit: glance at WHO published it before you take it to heart.",
    question: "An article has no author, no date, and a website you've never heard of. How much weight does it get?",
    answers: [
      {
        label: "Very little, until someone I trust confirms it",
        response:
          "Right. Words are cheap to make now. Trust still has to be earned the old way.",
      },
      {
        label: "Same as any article",
        response:
          "It used to cost effort to publish, so print earned some trust. Now anyone — or anything — can publish in seconds. The source matters more than ever.",
      },
    ],
  },
  {
    id: "news-2",
    unit: "Clear thinking",
    skill: "I read past the headline.",
    title: "Headlines are fishing hooks",
    teach:
      "Headlines are written to hook you — anger and fear get the most clicks, and AI now writes thousands of them a day. The story under the headline is often much calmer than the hook.",
    question: "A headline makes your blood boil. What's the wise move?",
    answers: [
      {
        label: "Read the actual story before reacting",
        response:
          "Yes. Nine times out of ten the story is milder than the hook. Your calm reading defeats their noisy headline.",
      },
      {
        label: "Share it — people need to be angry too",
        response:
          "That's the hook working exactly as designed. Read first; if it still deserves anger after that, at least it's earned.",
      },
    ],
  },
  {
    id: "news-3",
    unit: "Clear thinking",
    skill: "I use the two-sources rule.",
    title: "The two-sources rule",
    teach:
      "Here's a rule reporters live by: a big claim needs two independent sources. You can borrow it. Before believing something big, find it in two places that don't copy each other.",
    question: "A big health claim appears in one post. What does the rule say?",
    answers: [
      {
        label: "Find it somewhere trustworthy and independent too",
        response:
          "Exactly. True things leave tracks in more than one place. Two sources, then belief.",
      },
      {
        label: "One source is enough if it's confident",
        response:
          "Confidence is free — AI can write unlimited confident posts. Two independent sources is the filter confidence can't fake.",
      },
    ],
  },
  {
    id: "news-4",
    unit: "Clear thinking",
    skill: "I use AI summaries as a start, not the last word.",
    title: "Summaries are appetizers",
    teach:
      "AI can shrink a long article into three sentences — wonderful for deciding what's worth your time. But summaries can drop the part that mattered. For anything important, the summary is the appetizer, not the meal.",
    question: "AI summarizes a letter about your benefits. It seems fine. What next?",
    answers: [
      {
        label: "Read the real letter too — it's about my benefits",
        response:
          "Right. Summaries are for sorting; originals are for deciding. Anything about your money or rights deserves the full read.",
      },
      {
        label: "The summary is enough",
        response:
          "For a news story, maybe. For YOUR benefits, the details are the whole point — and details are exactly what summaries drop.",
      },
    ],
  },
  {
    id: "news-5",
    unit: "Clear thinking",
    skill: "I check dates on news photos.",
    title: "Old photos, new stories",
    teach:
      "A common trick needs no AI at all: a real photo from years ago gets reused for a new story. The photo is real; the pairing is the lie. A glance at the date breaks the spell.",
    question: "A dramatic photo “from yesterday's storm” looks familiar. What do you check?",
    answers: [
      {
        label: "The date — real photos get recycled for new stories",
        response:
          "Sharp eye. The oldest trick in the book just got a new engine. Dates don't lie, even when captions do.",
      },
      {
        label: "Nothing — the photo looks real",
        response:
          "It probably IS real — from some other year. The photo tells the truth; the caption does the lying. Check the date.",
      },
    ],
  },
  {
    id: "news-6",
    unit: "Clear thinking",
    skill: "I can correct kindly.",
    share: "Fun idea: agree with a friend that you'll gently flag fakes for each other — a truth partnership.",
    title: "Correcting without wounding",
    teach:
      "A friend shares something fake. We've all done it — no shame. A kind, private note works best: “I looked this one up and it seems it isn't true. I almost shared it too!”",
    question: "What makes a correction land softly?",
    answers: [
      {
        label: "Private, kind, and “I almost fell for it too”",
        response:
          "That last part is the magic — it removes the shame. Friends who correct each other kindly are worth their weight in gold.",
      },
      {
        label: "Correcting them in front of the whole group",
        response:
          "Public corrections protect the group but bruise the friend. A private word usually fixes the fake AND keeps the friendship.",
      },
    ],
  },

  /* ---- Unit 7: Family and friends ---- */
  {
    id: "family-1",
    unit: "Family and friends",
    skill: "I can teach what I've learned.",
    share: "Fun idea: teach the gift-card rule to one person this week. Teaching it makes it yours forever.",
    title: "The student becomes the teacher",
    teach:
      "You know things now that most people don't — the gift-card rule, the call-back rule, the pause before forwarding. Teaching one rule to one person makes it stick in both of you.",
    question: "What happens to knowledge when you teach it?",
    answers: [
      {
        label: "It gets stronger in me, and it protects them",
        response:
          "Exactly — teaching is the only spending that makes you richer. One rule, one person, this week.",
      },
      {
        label: "I'm not qualified to teach anyone",
        response:
          "You finished lessons most people never got. “Let me show you one trick I learned” — that's teaching, and you're ready.",
      },
    ],
  },
  {
    id: "family-2",
    unit: "Family and friends",
    skill: "My family has a code word.",
    mission: "This week, do it for real: pick a family code word at dinner or on a call.",
    title: "The family code word",
    teach:
      "Remember the fake-voice lesson? Here's the fix, for real this time: pick one secret word with your family. Any emergency call that can't say the word isn't family — no matter whose voice it wears.",
    question: "What makes a good family code word?",
    answers: [
      {
        label: "Something we'd all remember but strangers can't guess",
        response:
          "Exactly — the old dog's name, the beach house summer. Five minutes to set up, and it beats the best voice fakery in the world.",
      },
      {
        label: "Something written down somewhere safe",
        response:
          "Careful — written down means findable. The best code word lives only in your family's heads, where no scammer can browse.",
      },
    ],
  },
  {
    id: "family-3",
    unit: "Family and friends",
    skill: "I ask for help without shame.",
    title: "Asking is a skill, not a weakness",
    teach:
      "Technology changes fast for everyone — the engineers who built last year's phones are confused by next year's. Asking for help isn't falling behind; it's how everybody keeps up.",
    question: "You're stuck on something on the phone. What's the skilled move?",
    answers: [
      {
        label: "Ask — AI first, people when I want people",
        response:
          "That's the whole system: AI for the quick questions, office hours and family for the human ones. Askers stay current; the proud get stuck.",
      },
      {
        label: "Struggle alone so nobody knows",
        response:
          "So many capable people do this — and stay stuck for months over a two-minute answer. Asking IS the skill. You've earned the right to use it.",
      },
    ],
  },
  {
    id: "family-4",
    unit: "Family and friends",
    skill: "I can talk with kids about AI.",
    title: "The grandkids use it too",
    teach:
      "Children and grandchildren use AI for homework and fun. You now know enough to talk with them about it: ask them to show you their favorite trick — and trade one of your safety rules back.",
    question: "What do you have that the grandkids' AI doesn't?",
    answers: [
      {
        label: "Judgment, experience, and the safety rules",
        response:
          "Exactly. They bring the speed; you bring the wisdom. That trade — their tricks for your rules — is good for both sides.",
      },
      {
        label: "Nothing — they're the tech generation",
        response:
          "They tap faster, sure. But AI's real risks — trusting too fast, sharing too much — are judgment problems. Judgment is your department.",
      },
    ],
  },
  {
    id: "family-5",
    unit: "Family and friends",
    skill: "I can show my progress proudly.",
    share: "Fun idea: show someone your garden and your skills list. Let them be impressed — they should be.",
    title: "Show someone your garden",
    teach:
      "Your garden isn't just pretty — every flower is a real skill you didn't have before. Showing it to someone isn't bragging; it's proof that learning has no age limit.",
    question: "Someone says “I'm too old to learn this stuff.” What does your garden say?",
    answers: [
      {
        label: "“Look at this — one small lesson a day, that's all it takes”",
        response:
          "Your garden might be the nudge that starts theirs. Proof beats pep talks every time.",
      },
      {
        label: "Maybe they're right",
        response:
          "You have a screen full of flowers that says otherwise! You're the counter-example now — that's worth showing around.",
      },
    ],
  },
  {
    id: "family-6",
    unit: "Family and friends",
    skill: "I balance AI chat with real people.",
    title: "Company, in the right measure",
    teach:
      "AI is always awake and always patient, and chatting with it can be a genuine comfort — that's allowed. Just keep it in balance: AI for company sometimes, real voices for the things that feed the heart.",
    question: "What's a healthy balance?",
    answers: [
      {
        label: "AI as one companion among my people, not instead of them",
        response:
          "Beautifully put. Enjoy the chats guilt-free — and keep making the calls, the visits, the office-hours trips. Both, in their place.",
      },
      {
        label: "AI could replace the phone calls",
        response:
          "It's tempting — AI never cancels. But it also never truly misses you, and being missed is half of love. Keep the real calls.",
      },
    ],
  },

  /* ---- Unit 8: Wise user (graduation) ---- */
  {
    id: "wise-1",
    unit: "Wise user",
    skill: "I know free AI covers most needs.",
    title: "Free is plenty",
    teach:
      "Good AI helpers are free, and free covers everything you've learned here. If anyone pressures you to pay to “unlock” something — especially winnings or prizes — you already know that song.",
    question: "A pop-up says “Pay $99 to unlock premium AI or lose access!” What is that?",
    answers: [
      {
        label: "Pressure — and pressure means walk away",
        response:
          "Right. Real companies let you choose calmly. Countdown clocks and threats are the scammer's soundtrack.",
      },
      {
        label: "Probably a fair deal",
        response:
          "Paid AI exists, but it never threatens you. “Pay or lose everything, hurry!” is pressure — and pressure always gets a no.",
      },
    ],
  },
  {
    id: "wise-2",
    unit: "Wise user",
    skill: "I can spot AI around me.",
    title: "You were surrounded all along",
    teach:
      "AI isn't only in chat: it picks your TV recommendations, sorts your photos, routes your bus, filters your spam. You've been managing AI for years — now you just know its name.",
    question: "The TV suggests a show you end up loving. What happened?",
    answers: [
      {
        label: "AI noticed my tastes and made a guess",
        response:
          "Exactly — same guessing machinery as chat, pointed at your evenings. Helpful when it serves you; worth noticing when it steers you.",
      },
      {
        label: "A lucky coincidence",
        response:
          "It's a very hardworking coincidence — it happens every night! That's AI studying your tastes. Nice when it works; good to know who's suggesting.",
      },
    ],
  },
  {
    id: "wise-3",
    unit: "Wise user",
    skill: "I share with care, always.",
    title: "The forever rule of sharing",
    teach:
      "One rule from this whole journey will never expire: what you share stops being only yours. Passwords, numbers, photos, secrets — share with care, with people and with AI alike.",
    question: "Before sharing something private anywhere, what's the forever question?",
    answers: [
      {
        label: "“Am I fine with this leaving my hands?”",
        response:
          "That question will outlive every technology that comes after this one. Carry it everywhere.",
      },
      {
        label: "“Does the website look trustworthy?”",
        response:
          "Looks are exactly what scammers perfect. The stronger question looks inward: am I fine with this leaving my hands? If not — it doesn't.",
      },
    ],
  },
  {
    id: "wise-4",
    unit: "Wise user",
    skill: "I trust my own judgment first.",
    title: "The judge was always you",
    teach:
      "Ninety days of lessons, one thread through all of them: AI suggests, sources inform, and YOU decide. Your judgment — built over a whole lifetime — was the main tool all along.",
    question: "AI, a neighbor, and a headline all disagree. Who weighs it up?",
    answers: [
      {
        label: "I do — that's what judgment is for",
        response:
          "Exactly. You gather the voices, you weigh them, you decide. A lifetime of experience is sitting on that bench — trust it.",
      },
      {
        label: "Whoever sounds most confident",
        response:
          "Confidence is a performance — AI does it flawlessly and scammers do it professionally. Your quiet judgment outranks every loud voice in the room.",
      },
    ],
  },
  {
    id: "wise-5",
    unit: "Wise user",
    skill: "I can learn anything next.",
    title: "The bigger thing you learned",
    teach:
      "Under all these lessons hides a bigger one: you learned a brand-new thing, at your age, two minutes at a time. The subject was AI — but the proof is about you.",
    question: "What does three months of flowers prove?",
    answers: [
      {
        label: "That I can learn whatever comes next, too",
        response:
          "That's the real graduation. New phone, new tools, whatever the future brings — you now know exactly how you'll meet it: one small day at a time.",
      },
      {
        label: "That I got lucky with an easy app",
        response:
          "The app only opened the door — YOU showed up, day after day after day. That showing-up is yours, and it works on everything.",
      },
    ],
  },
  {
    id: "wise-6",
    unit: "Wise user",
    skill: "I finished a three-month journey.",
    share: "Fun idea: show your finished garden at office hours — you've more than earned the applause.",
    title: "Look at your garden now",
    teach:
      "Three months ago this garden was bare dirt. Look at it now — every single flower is something you know. The lessons pause here, but office hours never do, and neither do you.",
    question: "What would you tell someone starting their first lesson today?",
    answers: [
      {
        label: "“Two minutes a day — you won't believe where it goes”",
        response:
          "Perfect words from someone who'd know. Congratulations, graduate — Meni is so proud of you. See you at office hours, always.",
      },
      {
        label: "“It's probably not for me”",
        response:
          "Said the person with a garden full of flowers! You're living proof it works. Come to office hours — your next chapter is waiting there.",
      },
    ],
  },
];

/* The lesson sequence: core course first (everyone), then the chosen
   pack, then the shared mini-courses. */
function lessonSequence(packName) {
  const pack = PACKS[packName] || [];
  return CORE_LESSONS.concat(pack, EXTENDED_LESSONS);
}
