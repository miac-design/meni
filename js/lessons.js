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
*/

const CORE_LESSONS = [
  {
    id: "core-1",
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
    id: "core-10",
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

/* The lesson sequence: core course first (everyone), then the chosen pack. */
function lessonSequence(packName) {
  const pack = PACKS[packName] || [];
  return CORE_LESSONS.concat(pack);
}
