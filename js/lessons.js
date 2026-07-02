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
  ],
};

/* The lesson sequence: core course first (everyone), then the chosen pack. */
function lessonSequence(packName) {
  const pack = PACKS[packName] || [];
  return CORE_LESSONS.concat(pack);
}
