/* Meni v0 — app logic.
   Everything lives on this phone. No accounts, no servers, no analytics.
   Navigation is linear and tiny: each lesson is three small steps
   (learn → question → Meni answers), one screen at a time. */

"use strict";

/* ---------------- UI strings: English and Spanish ----------------
   Every learner-facing word lives here, in both languages. The learner
   picks a language with one tap on the very first screen; the
   facilitator can change it later in setup. The facilitator setup
   screen itself stays in English (it is never shown to the learner). */

const I18N = {
  en: {
    appName: "Meni",
    hello: "Hi, I'm Meni.",
    sizeSample: "Can you read this comfortably?",
    sizeConfirm: "This size is good",
    sizeLabel: "Text size",
    sizeNames: ["Regular", "Large", "Largest"],
    day: "Day",
    next: "Next",
    readToMe: "Read it to me",
    stopReading: "Stop reading",
    saveForMia: "Save this question for Meni",
    savedForMia: "Saved! Bring it to Meni's office hours.",
    seeGarden: "See my garden",
    skipAhead: "I already know this",
    yourGarden: "Your garden",
    lessonsLearnedWord: (n) => (n === 1 ? "lesson learned" : "lessons learned"),
    welcomeBack: "Welcome back! Your garden waited for you.",
    doneToday: "That's your lesson for today. Come back tomorrow for a new one!",
    gardenGrowing: "Your garden is growing, one lesson at a time.",
    allDone: "You've finished every lesson for now. See you at office hours!",
    startLesson: "Start today's lesson",
    officeHours: (date) => `Bring a question to Meni's office hours, ${date}.`,
    savedQuestionsTitle: "Your questions for office hours",
    scamAlert: "Take care: this lesson is about scams",
    newFlower: "A new flower for your garden!",
    favTitle: "Which flower do you like best?",
    favHint: "Your garden will grow extra flowers of your favorite kind.",
    favSkip: "Surprise me with all of them",
    flowerNames: ["Pink", "Purple", "Yellow", "Orange", "Blue", "White"],
    wateringEyebrow: "Watering day",
    wateringTitle: (flower) => `Let's water the ${flower.toLowerCase()} flower!`,
    wateringSub: "Remember this one?",
    watered: "Watered! Your flower is sparkling.",
    wateredToday: "Your garden is watered for today. Come back tomorrow for a new lesson!",
    waterBtn: "Water today's flower",
    newSkill: (skill) => `New skill: ${skill}`,
    skillsBtn: "See what I can do",
    skillsTitle: "What I can do now",
    skillsCount: (n) => (n === 1 ? "1 skill and growing." : `${n} skills and growing.`),
    skillsBack: "Back to my garden",
    morning: "Good morning!",
    afternoon: "Good afternoon!",
    evening: "Good evening!",
    gardenAria: (n, sprout) =>
      `A garden with ${n} flowers, one for each lesson learned${sprout ? ", and a new sprout for tomorrow" : ""}`,
    trustLine: "Meni is a free learning companion from Austin AI Hub. Everything stays on this phone.",
    setupLink: "Facilitator setup",
    speechLang: "en-US",
    dateLocale: "en-US",
  },
  es: {
    appName: "Meni",
    hello: "¡Hola! Soy Meni.",
    sizeSample: "¿Puede leer esto con comodidad?",
    sizeConfirm: "Este tamaño está bien",
    sizeLabel: "Tamaño de letra",
    sizeNames: ["Normal", "Grande", "Muy grande"],
    day: "Día",
    next: "Siguiente",
    readToMe: "Léemelo",
    stopReading: "Dejar de leer",
    saveForMia: "Guardar esta pregunta para Meni",
    savedForMia: "¡Guardada! Llévela a las horas de consulta de Meni.",
    seeGarden: "Ver mi jardín",
    skipAhead: "Esto ya lo sé",
    yourGarden: "Su jardín",
    lessonsLearnedWord: (n) => (n === 1 ? "lección aprendida" : "lecciones aprendidas"),
    welcomeBack: "¡Qué gusto verle! Su jardín le estaba esperando.",
    doneToday: "Esa fue su lección de hoy. ¡Vuelva mañana para una nueva!",
    gardenGrowing: "Su jardín crece, una lección a la vez.",
    allDone: "Ha terminado todas las lecciones por ahora. ¡Nos vemos en las horas de consulta!",
    startLesson: "Empezar la lección de hoy",
    officeHours: (date) => `Traiga una pregunta a las horas de consulta de Meni, el ${date}.`,
    savedQuestionsTitle: "Sus preguntas para las horas de consulta",
    scamAlert: "Cuidado: esta lección trata de estafas",
    newFlower: "¡Una flor nueva para su jardín!",
    favTitle: "¿Cuál flor le gusta más?",
    favHint: "Su jardín tendrá más flores de su favorita.",
    favSkip: "Sorpréndame con todas",
    flowerNames: ["Rosada", "Morada", "Amarilla", "Anaranjada", "Azul", "Blanca"],
    wateringEyebrow: "Día de riego",
    wateringTitle: (flower) => `¡Vamos a regar la flor ${flower.toLowerCase()}!`,
    wateringSub: "¿Se acuerda de esta?",
    watered: "¡Regada! Su flor está brillando.",
    wateredToday: "Su jardín ya está regado por hoy. ¡Vuelva mañana para una lección nueva!",
    waterBtn: "Regar la flor de hoy",
    newSkill: (skill) => `Nueva habilidad: ${skill}`,
    skillsBtn: "Ver lo que ya sé hacer",
    skillsTitle: "Lo que ya sé hacer",
    skillsCount: (n) => (n === 1 ? "1 habilidad, y siguen creciendo." : `${n} habilidades, y siguen creciendo.`),
    skillsBack: "Volver a mi jardín",
    morning: "¡Buenos días!",
    afternoon: "¡Buenas tardes!",
    evening: "¡Buenas noches!",
    gardenAria: (n, sprout) =>
      `Un jardín con ${n} flores, una por cada lección aprendida${sprout ? ", y un brote nuevo para mañana" : ""}`,
    trustLine: "Meni es un compañero de aprendizaje gratuito de Austin AI Hub. Todo se queda en este teléfono.",
    setupLink: "Facilitator setup",
    speechLang: "es-US",
    dateLocale: "es",
  },
};

let STRINGS = I18N.en;

function setLang(lang) {
  state.lang = lang === "es" ? "es" : "en";
  STRINGS = I18N[state.lang];
  document.documentElement.lang = state.lang;
}

const SCALES = { A: 1, AA: 1.2, AAA: 1.45 };

/* ---------------- Local state (this phone only) ---------------- */

const STORE_KEY = "meni.v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    /* Unreadable state: start fresh rather than break. */
  }
  return defaultState();
}

function defaultState() {
  return {
    lang: null, // 'en' | 'es' — chosen on the very first screen
    textScale: null, // 'A' | 'AA' | 'AAA'
    pack: "everyday",
    officeHoursDate: null, // 'YYYY-MM-DD'
    completed: [], // [{ id, date }]
    lastVisit: null, // 'YYYY-MM-DD'
    saved: [], // [{ title, question }]
    chime: true, // soft chime when a flower grows
    voice: { en: null, es: null }, // preferred read-aloud voice name per language
    watered: [], // watering-day reviews: [{ id, date }] — spaced repetition
    favAsked: false, // has the favorite-color question been offered?
    favColor: null, // index into GARDEN.flowers, or null for the full mix
  };
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (e) {
    /* Storage full or blocked: the app still works for this visit. */
  }
}

let state = loadState();

/* ---------------- Dates (always the phone's local date) ---------------- */

function todayStr() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function daysBetween(a, b) {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  return Math.round((new Date(by, bm - 1, bd) - new Date(ay, am - 1, ad)) / 86400000);
}

function friendlyDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(STRINGS.dateLocale, {
    month: "long",
    day: "numeric",
  });
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return STRINGS.morning;
  if (h < 17) return STRINGS.afternoon;
  return STRINGS.evening;
}

/* ---------------- Lesson progress ---------------- */

function sequence() {
  return lessonSequence(state.pack, state.lang);
}

function isCompleted(id) {
  return state.completed.some((c) => c.id === id);
}

function nextLesson() {
  return sequence().find((l) => !isCompleted(l.id)) || null;
}

function completedToday() {
  const t = todayStr();
  return state.completed.some((c) => c.date === t);
}

function wateredToday() {
  const t = todayStr();
  return state.watered.some((w) => w.date === t);
}

/* Spaced repetition: once 3 flowers exist, every 4th day revisits an
   old lesson instead of starting a new one — framed as watering. */
function isWateringDay() {
  return (
    state.completed.length >= 3 &&
    (state.completed.length + state.watered.length) % 4 === 3
  );
}

function wateringLesson() {
  const idx = state.watered.length % state.completed.length;
  const id = state.completed[idx].id;
  return { lesson: sequence().find((l) => l.id === id) || null, idx };
}

function completeLesson(id) {
  if (!isCompleted(id)) {
    state.completed.push({ id, date: todayStr() });
    saveState();
  }
}

/* ---------------- Text size ---------------- */

function applyScale(name) {
  document.documentElement.style.setProperty("--scale", SCALES[name] || 1);
}

/* ---------------- Audio: "Read it to me" ----------------
   Two tiers, best first:
   1. A real human recording, if one exists for this lesson and language
      (see audio/README and tools/record-audio.html — the manifest in
      js/audio-manifest.js lists what has been recorded).
   2. The phone's own voice — but never the robotic default. We score
      every installed voice and pick the most natural one (phones ship
      "enhanced"/"natural" voices that the default API call ignores),
      and the facilitator can pick a specific voice in setup. */

let speaking = false;
let audioEl = null;

/* A human recording beats any synthesis. Files live in audio/<lang>/. */
function clipUrl(lessonId, part) {
  if (typeof AUDIO_FILES === "undefined") return null;
  return AUDIO_FILES[`${state.lang}/${lessonId}.${part}`] || null;
}

/* Rank the phone's installed voices for a language: prefer the natural/
   enhanced ones phones hide behind the robotic default, prefer on-device
   voices (work offline), and shun known low-quality engines. */
function voiceScore(v, lang) {
  const name = (v.name || "").toLowerCase();
  let s = 0;
  if (!v.lang || v.lang.slice(0, 2).toLowerCase() !== lang) return -1;
  for (const good of ["natural", "neural", "premium", "enhanced", "siri"]) {
    if (name.includes(good)) s += 10;
  }
  if (name.includes("espeak") || name.includes("compact")) s -= 10;
  if (v.localService) s += 2;
  if (v.lang.toLowerCase() === STRINGS.speechLang.toLowerCase()) s += 1;
  return s;
}

function voicesFor(lang) {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => voiceScore(v, lang) >= 0)
    .sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang));
}

function pickVoice() {
  const options = voicesFor(state.lang || "en");
  if (!options.length) return null;
  const saved = state.voice && state.voice[state.lang];
  if (saved) {
    const match = options.find((v) => v.name === saved);
    if (match) return match;
  }
  return options[0];
}

/* Voice lists load lazily on some phones; warm them up early. */
if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", () => {});
}

function setTalking(on) {
  document.querySelectorAll(".meni-holder").forEach((el) => el.classList.toggle("talking", on));
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (audioEl) {
    audioEl.pause();
    audioEl = null;
  }
  speaking = false;
  setTalking(false);
  const btn = document.getElementById("read-btn");
  if (btn) btn.querySelector(".read-label").textContent = STRINGS.readToMe;
}

function startSpeakingUI() {
  speaking = true;
  setTalking(true);
  const btn = document.getElementById("read-btn");
  if (btn) btn.querySelector(".read-label").textContent = STRINGS.stopReading;
}

function speakSynth(text, voiceOverride) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  const voice = voiceOverride || pickVoice();
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = STRINGS.speechLang;
  }
  u.rate = 0.92; // unhurried, senior-paced
  u.pitch = 1;
  u.onend = () => stopSpeaking();
  u.onerror = () => stopSpeaking();
  startSpeakingUI();
  window.speechSynthesis.speak(u);
}

/* When a human recording exists we play it; otherwise the best
   installed voice reads the text. */
function toggleSpeak(text, audioUrl) {
  if (speaking) {
    stopSpeaking();
    return;
  }
  if (audioUrl) {
    audioEl = new Audio(audioUrl);
    audioEl.onended = () => stopSpeaking();
    audioEl.onerror = () => {
      audioEl = null;
      speakSynth(text);
    };
    startSpeakingUI();
    audioEl.play().catch(() => {
      audioEl = null;
      speakSynth(text);
    });
    return;
  }
  speakSynth(text);
}

/* ---------------- Soft chime: two gentle notes when a flower grows ---------------- */

let audioCtx = null;

function playChime() {
  if (!state.chime) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime;
    [[659.25, 0], [783.99, 0.13]].forEach(([freq, dt]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t + dt);
      gain.gain.exponentialRampToValueAtTime(0.1, t + dt + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t + dt);
      osc.stop(t + dt + 0.65);
    });
  } catch (e) {
    /* No sound is never an error. */
  }
}

/* ---------------- Small inline icons (always paired with text labels) ---------------- */

/* Lucide icons (lucide.dev, ISC license), inlined so the app stays
   offline. Every icon is always paired with a visible text label. */
const LUCIDE = (paths) =>
  `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

const ICONS = {
  /* volume-2 */
  speaker: LUCIDE(
    `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`
  ),
  /* calendar-days */
  calendar: LUCIDE(
    `<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>`
  ),
  /* triangle-alert */
  warn: LUCIDE(
    `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 20h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>`
  ),
  /* lightbulb */
  bulb: LUCIDE(
    `<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>`
  ),
  /* users */
  users: LUCIDE(
    `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
  ),
  /* droplets */
  drop: LUCIDE(
    `<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>`
  ),
  /* sparkles */
  spark: LUCIDE(
    `<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/>`
  ),
};

/* ---------------- Rendering helpers ---------------- */

const app = () => document.getElementById("app");

/* Every screen change rebuilds the page, which silently drops keyboard
   and screen-reader focus back to <body>. After each render (except the
   very first page load) focus moves to the new screen's heading so the
   change is announced and Tab starts from the top. */
let firstScreen = true;

function focusScreen() {
  if (firstScreen) {
    firstScreen = false;
    return;
  }
  /* Prefer the heading; a selector list would match <main> first in
     document order, so ask for each in turn. */
  const target =
    app().querySelector("h1") ||
    app().querySelector(".question-text") ||
    app().querySelector("main");
  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: false });
  }
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[ch]);
}

function header() {
  return `
    <header class="app-header">
      <div class="brand"><span class="meni-holder">${MENI.mark()}</span><span>${STRINGS.appName}</span></div>
      <button class="btn-secondary btn-small" id="text-size-btn" type="button">
        <span aria-hidden="true" style="font-weight:800">Aa</span> ${STRINGS.sizeLabel}
      </button>
    </header>`;
}

function wireHeader(returnTo) {
  const btn = document.getElementById("text-size-btn");
  if (btn) btn.addEventListener("click", () => renderSizeChooser({ returnTo }));
}

function stepDots(step) {
  return `<div class="step-dots" aria-hidden="true">
    ${[1, 2, 3].map((i) => `<span class="${i <= step ? "on" : ""}"></span>`).join("")}
  </div>`;
}

function readButton() {
  return `<button type="button" class="btn-secondary" id="read-btn">
    ${ICONS.speaker}<span class="read-label">${STRINGS.readToMe}</span>
  </button>`;
}

function wireRead(text, audioUrl) {
  document
    .getElementById("read-btn")
    .addEventListener("click", () => toggleSpeak(text, audioUrl));
}

function alertBanner(lesson) {
  return lesson.alert
    ? `<div class="alert-banner">${ICONS.warn}<span>${STRINGS.scamAlert}</span></div>`
    : "";
}

/* ---------------- Screen 0: language, one tap (first run only) ----------------
   Shown before any other words exist, so it speaks both languages at
   once. Two equal buttons, nothing else to decide. */

function renderLanguagePick() {
  stopSpeaking();
  app().innerHTML = `
    <main>
      <div class="hello-stage"><div class="disc">${MENI.waving("delighted")}</div></div>
      <h1 class="center"><span lang="en">Hi, I'm Meni.</span><br><span lang="es">¡Hola! Soy Meni.</span></h1>
      <div class="btn-stack">
        <button type="button" class="btn-primary" data-lang="en" lang="en">English</button>
        <button type="button" class="btn-primary" data-lang="es" lang="es">Español</button>
      </div>
      <p class="footnote center"><span lang="en">${I18N.en.trustLine}</span><br><span lang="es">${I18N.es.trustLine}</span></p>
      <p class="footnote center"><button type="button" class="btn-quiet btn-small" id="setup-link" style="margin:0 auto">${I18N.en.setupLink}</button></p>
    </main>`;

  app().querySelectorAll("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      saveState();
      renderSizeChooser();
    })
  );
  document.getElementById("setup-link").addEventListener("click", renderSetup);
  focusScreen();
}

/* ---------------- Screen 1: size chooser ---------------- */

function renderSizeChooser(opts = {}) {
  stopSpeaking();
  const firstRun = !state.textScale;
  const current = state.textScale || "A";
  applyScale(current);

  app().innerHTML = `
    ${firstRun ? "" : header()}
    <main>
      ${firstRun ? `
        <div class="hello-stage"><div class="disc">${MENI.waving("delighted")}</div></div>
        <h1 class="center">${STRINGS.hello}</h1>` : ""}
      <div class="card teach-text center" id="size-sample">${STRINGS.sizeSample}</div>
      <div class="size-row" role="group" aria-label="${STRINGS.sizeLabel}">
        <button type="button" class="size-a" data-size="A">A<span class="size-label">${STRINGS.sizeNames[0]}</span></button>
        <button type="button" class="size-aa" data-size="AA">AA<span class="size-label">${STRINGS.sizeNames[1]}</span></button>
        <button type="button" class="size-aaa" data-size="AAA">AAA<span class="size-label">${STRINGS.sizeNames[2]}</span></button>
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="size-confirm">${STRINGS.sizeConfirm}</button>
      </div>
      ${firstRun ? `
        <p class="footnote center">${STRINGS.trustLine}</p>
        <p class="footnote center"><button type="button" class="btn-quiet btn-small" id="setup-link" style="margin:0 auto">${STRINGS.setupLink}</button></p>` : ""}
    </main>`;

  let chosen = current;
  const buttons = app().querySelectorAll(".size-row button");
  function mark() {
    buttons.forEach((b) => b.classList.toggle("selected", b.dataset.size === chosen));
  }
  mark();
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      chosen = b.dataset.size;
      applyScale(chosen); // the whole screen previews the size, live
      mark();
    })
  );

  document.getElementById("size-confirm").addEventListener("click", () => {
    state.textScale = chosen;
    saveState();
    applyScale(chosen);
    if (opts.returnTo === "garden") renderGarden();
    else renderHome();
  });

  const setupLink = document.getElementById("setup-link");
  if (setupLink) setupLink.addEventListener("click", renderSetup);
  if (!firstRun) wireHeader(opts.returnTo);
  focusScreen();
}

/* ---------------- Screen 1b: favorite flower (first run, one tap) ---------------- */

function flowerSwatch(i) {
  return `<svg viewBox="0 0 44 56" aria-hidden="true" focusable="false">
    <g transform="translate(22 0)">
      <path d="M0 52 Q2 38 0 26" fill="none" stroke="${GARDEN.stem}" stroke-width="4" stroke-linecap="round"/>
      ${flowerHead(GARDEN.flowers[i], 20)}
    </g>
  </svg>`;
}

function renderColorPick() {
  stopSpeaking();
  app().innerHTML = `
    ${header()}
    <main>
      <h1>${STRINGS.favTitle}</h1>
      <p>${STRINGS.favHint}</p>
      <div class="color-grid" role="group" aria-label="${STRINGS.favTitle}">
        ${GARDEN.flowers
          .map(
            (f, i) => `
          <button type="button" class="color-pick" data-fav="${i}">
            ${flowerSwatch(i)}<span>${STRINGS.flowerNames[i]}</span>
          </button>`
          )
          .join("")}
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-quiet" id="fav-skip">${STRINGS.favSkip}</button>
      </div>
    </main>`;

  wireHeader();
  app().querySelectorAll("[data-fav]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.favColor = Number(btn.dataset.fav);
      state.favAsked = true;
      saveState();
      renderHome();
    })
  );
  document.getElementById("fav-skip").addEventListener("click", () => {
    state.favColor = null;
    state.favAsked = true;
    saveState();
    renderHome();
  });
  focusScreen();
}

/* ---------------- Screen 2: the daily lesson, three small steps ---------------- */

/* Step 1 of 3: the idea. Two sentences, nothing else to decide. */
function renderLessonTeach(lesson) {
  stopSpeaking();
  const dayNumber = state.completed.length + 1; // only ever counts up

  app().innerHTML = `
    ${header()}
    <main>
      ${stepDots(1)}
      ${alertBanner(lesson)}
      <p class="eyebrow">${STRINGS.day} ${dayNumber}</p>
      <h1>${esc(lesson.title)}</h1>
      ${readButton()}
      <div class="card"><p class="teach-text" style="margin:0">${esc(lesson.teach)}</p></div>
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="next-btn">${STRINGS.next}</button>
        <button type="button" class="btn-quiet" id="skip-btn">${STRINGS.skipAhead}</button>
      </div>
    </main>`;

  wireHeader("lesson");
  wireRead(`${lesson.title}. ${lesson.teach}`, clipUrl(lesson.id, "teach"));
  document.getElementById("next-btn").addEventListener("click", () => renderLessonAsk(lesson));

  /* Skip-ahead path: never feels like a test. The flower still grows. */
  document.getElementById("skip-btn").addEventListener("click", () => {
    completeLesson(lesson.id);
    const next = nextLesson();
    if (next) renderLessonTeach(next);
    else renderGarden();
  });
  focusScreen();
}

/* Step 2 of 3: one question, two big buttons. */
function renderLessonAsk(lesson) {
  stopSpeaking();

  const answerButtons = lesson.answers
    .map(
      (a, i) => `
      <button type="button" class="${i === 0 ? "btn-primary" : "btn-secondary"}" data-answer="${i}">
        ${esc(a.label)}
      </button>`
    )
    .join("");

  app().innerHTML = `
    ${header()}
    <main>
      ${stepDots(2)}
      ${alertBanner(lesson)}
      ${readButton()}
      <p class="question-text" style="margin-top:16px">${esc(lesson.question)}</p>
      <div class="btn-stack" id="answers">${answerButtons}</div>
    </main>`;

  wireHeader("lesson");
  wireRead(
    `${lesson.question} Your choices are: ${lesson.answers.map((a) => a.label).join(", or ")}.`,
    clipUrl(lesson.id, "ask")
  );

  app().querySelectorAll("#answers button").forEach((btn) =>
    btn.addEventListener("click", () => {
      completeLesson(lesson.id);
      playChime();
      renderLessonDone(lesson, Number(btn.dataset.answer));
    })
  );
  focusScreen();
}

/* Step 3 of 3: Meni answers, warmly. No scores, no X marks, ever.
   The first answer is always the confident path (delighted Meni);
   the second is the gentler path (curious Meni, head tilted, never
   cross). Both get equally warm words. */
function renderLessonDone(lesson, answerIdx) {
  stopSpeaking();
  const response = lesson.answers[answerIdx].response;
  const avatar = answerIdx === 0 ? MENI.waving("delighted") : MENI.classic("curious");
  const promptCard = lesson.mission
    ? `<div class="card card-row prompt-card">${ICONS.bulb}<span>${esc(lesson.mission)}</span></div>`
    : lesson.share
      ? `<div class="card card-row prompt-card">${ICONS.users}<span>${esc(lesson.share)}</span></div>`
      : "";

  app().innerHTML = `
    ${header()}
    <main>
      ${stepDots(3)}
      <div class="meni-says">
        <div class="meni-avatar meni-holder">${avatar}</div>
        <div class="bubble teach-text" role="status">${esc(response)}</div>
      </div>
      ${bloomFigure(lesson)}
      ${promptCard}
      ${readButton()}
      <div class="btn-stack">
        <button type="button" class="btn-secondary" id="save-question">${STRINGS.saveForMia}</button>
        <button type="button" class="btn-primary" id="see-garden">${STRINGS.seeGarden}</button>
      </div>
    </main>`;

  wireHeader("lesson");
  wireRead(response, clipUrl(lesson.id, "done"));

  document.getElementById("save-question").addEventListener("click", (e) => {
    if (!state.saved.some((q) => q.title === lesson.title)) {
      state.saved.push({ title: lesson.title, question: lesson.question });
      saveState();
    }
    e.currentTarget.textContent = STRINGS.savedForMia;
    e.currentTarget.disabled = true;
  });

  document.getElementById("see-garden").addEventListener("click", renderGarden);
  focusScreen();
}

/* ---------------- Watering day: revisit an old lesson (spaced repetition) ---------------- */

function renderWateringAsk() {
  stopSpeaking();
  const { lesson, idx } = wateringLesson();
  if (!lesson) {
    renderGarden();
    return;
  }
  const flowerName = STRINGS.flowerNames[GARDEN.flowers.indexOf(flowerFor(idx))] || "";

  const answerButtons = lesson.answers
    .map(
      (a, i) => `
      <button type="button" class="${i === 0 ? "btn-primary" : "btn-secondary"}" data-answer="${i}">
        ${esc(a.label)}
      </button>`
    )
    .join("");

  app().innerHTML = `
    ${header()}
    <main>
      <p class="eyebrow">${ICONS.drop} ${STRINGS.wateringEyebrow}</p>
      <h1>${STRINGS.wateringTitle(flowerName)}</h1>
      <p>${STRINGS.wateringSub}</p>
      ${readButton()}
      <p class="question-text" style="margin-top:16px">${esc(lesson.question)}</p>
      <div class="btn-stack" id="answers">${answerButtons}</div>
    </main>`;

  wireHeader("lesson");
  wireRead(
    `${STRINGS.wateringSub} ${lesson.question} Your choices are: ${lesson.answers.map((a) => a.label).join(", or ")}.`,
    clipUrl(lesson.id, "ask")
  );

  app().querySelectorAll("#answers button").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.watered.push({ id: lesson.id, date: todayStr() });
      saveState();
      playChime();
      renderWateringDone(lesson, Number(btn.dataset.answer), idx);
    })
  );
  focusScreen();
}

function renderWateringDone(lesson, answerIdx, idx) {
  stopSpeaking();
  const response = lesson.answers[answerIdx].response;
  const avatar = answerIdx === 0 ? MENI.waving("delighted") : MENI.classic("curious");
  const f = flowerFor(idx);

  app().innerHTML = `
    ${header()}
    <main>
      <div class="meni-says">
        <div class="meni-avatar meni-holder">${avatar}</div>
        <div class="bubble teach-text" role="status">${esc(response)}</div>
      </div>
      <div class="bloom-row">
        <svg viewBox="0 0 90 112" aria-hidden="true" focusable="false">
          <g transform="translate(45 0)">
            <path d="M0 106 Q3 76 0 48" fill="none" stroke="${GARDEN.stem}" stroke-width="5" stroke-linecap="round"/>
            ${flowerHead(f, 44)}
            <g class="sparkle" fill="none" stroke="#F5C462" stroke-width="2.4" stroke-linecap="round">
              <path d="M-26 30 l0 10 M-31 35 l10 0"/>
              <path d="M27 20 l0 8 M23 24 l8 0"/>
              <path d="M22 62 l0 7 M18.5 65.5 l7 0"/>
            </g>
          </g>
        </svg>
        <span class="bloom-caption">${STRINGS.watered}</span>
      </div>
      ${readButton()}
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="see-garden">${STRINGS.seeGarden}</button>
      </div>
    </main>`;

  wireHeader("lesson");
  wireRead(response, clipUrl(lesson.id, "done"));
  document.getElementById("see-garden").addEventListener("click", renderGarden);
  focusScreen();
}

/* ---------------- My skills: pride list, never scores ---------------- */

function renderSkills() {
  stopSpeaking();
  const skills = [];
  state.completed.forEach((c) => {
    const l = sequence().find((x) => x.id === c.id);
    if (l && l.skill && !skills.includes(l.skill)) skills.push(l.skill);
  });

  app().innerHTML = `
    ${header()}
    <main>
      <h1>${STRINGS.skillsTitle}</h1>
      <p class="lessons-learned"><span class="big">${skills.length}</span><span class="rest">${STRINGS.skillsCount(skills.length).replace(/^\d+ /, "")}</span></p>
      <div class="card saved-questions">
        <ul>${skills.map((sk) => `<li>${esc(sk)}</li>`).join("")}</ul>
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="back-garden">${STRINGS.skillsBack}</button>
      </div>
    </main>`;

  wireHeader("garden");
  document.getElementById("back-garden").addEventListener("click", renderGarden);
  focusScreen();
}

/* The just-earned flower sprouts and opens on the response screen,
   then appears planted in the garden. */
function bloomFigure(lesson) {
  const count = state.completed.length;
  if (!count) return "";
  const f = flowerFor(count - 1);
  const skillLine = lesson && lesson.skill
    ? `<span class="bloom-skill">${esc(STRINGS.newSkill(lesson.skill))}</span>`
    : "";
  return `
    <div class="bloom-row">
      <svg viewBox="0 0 90 112" aria-hidden="true" focusable="false">
        <g transform="translate(45 0)">
          <g class="bloom-stem">
            <path d="M0 106 Q3 76 0 48" fill="none" stroke="${GARDEN.stem}" stroke-width="5" stroke-linecap="round"/>
            <ellipse cx="-9" cy="80" rx="9" ry="4.5" fill="${GARDEN.stem}" transform="rotate(-32 -9 80)"/>
          </g>
          <g class="bloom-head">${flowerHead(f, 44)}</g>
        </g>
      </svg>
      <span><span class="bloom-caption">${STRINGS.newFlower}</span>${skillLine}</span>
    </div>`;
}

/* ---------------- Screen 3: the garden ---------------- */

/* Spring pastel garden (the palette Mia picked, July 2026).
   Every flower differs in color AND shape so the garden reads as a real
   mixed bed, and each keeps its spot forever as the garden grows. */
const GARDEN = {
  sky: ["#E7F4E1", "#F8FBF3"],
  sun: "#F5C462",
  hillA: "#A5C892",
  hillB: "#7CA36C",
  stem: "#6C945C",
  flowers: [
    { c: "#F2A6B8", shape: "daisy", center: "#FFFFFF" }, // blush
    { c: "#C9ABE3", shape: "five", center: "#FFFFFF" },  // lilac
    { c: "#F7D486", shape: "daisy", center: "#FFFFFF" }, // butter
    { c: "#F49B6A", shape: "tulip" },                     // soft coral
    { c: "#A9CDE3", shape: "five", center: "#FFFFFF" },  // powder blue
    { c: "#FFFFFF", shape: "daisy", center: "#F5C462" }, // white daisy
  ],
};

/* Which flower grows at position i: every third one is the learner's
   favorite (if they picked one); the rest keep the full pastel mix. */
function flowerFor(i) {
  const f = GARDEN.flowers;
  if (state.favColor != null && i % 3 === 0) return f[state.favColor % f.length];
  return f[i % f.length];
}

function flowerHead(f, topY) {
  if (f.shape === "tulip") {
    return `<g transform="translate(0 ${topY})"><path d="M-8 2 C-9 -11 -4 -15 0 -7 C4 -15 9 -11 8 2 C5 7 -5 7 -8 2 Z" fill="${f.c}" stroke="rgba(0,0,0,0.10)" stroke-width="1"/></g>`;
  }
  if (f.shape === "five") {
    let petals = "";
    for (let p = 0; p < 5; p++) {
      const a = (Math.PI * 2 * p) / 5 - Math.PI / 2;
      petals += `<circle cx="${(9.5 * Math.cos(a)).toFixed(1)}" cy="${(9.5 * Math.sin(a)).toFixed(1)}" r="6.5" fill="${f.c}"/>`;
    }
    return `<g transform="translate(0 ${topY})">${petals}<circle r="5.5" fill="${f.center}"/></g>`;
  }
  let petals = "";
  for (let p = 0; p < 8; p++) {
    const a = (Math.PI * 2 * p) / 8;
    const px = (9 * Math.cos(a)).toFixed(1);
    const py = (9 * Math.sin(a)).toFixed(1);
    petals += `<ellipse cx="${px}" cy="${py}" rx="6" ry="4.5" transform="rotate(${((a * 180) / Math.PI).toFixed(0)} ${px} ${py})" fill="${f.c}" stroke="${f.c === "#FFFFFF" ? "rgba(0,0,0,0.10)" : "none"}" stroke-width="0.8"/>`;
  }
  return `<g transform="translate(0 ${topY})">${petals}<circle r="5" fill="${f.center}"/></g>`;
}

function gardenSVG(count) {
  const groundY = 186;

  /* Fixed planting slots: each flower keeps its spot forever as the
     garden grows, and neighbors never crowd each other. */
  const slots = [0, 4, 8, 2, 6, 1, 5, 3, 7];

  /* Completed lessons bloom; the next lesson is already sprouting. */
  const showSprout = Boolean(nextLesson());
  const total = count + (showSprout ? 1 : 0);
  let flowers = "";
  for (let i = 0; i < total; i++) {
    const isSprout = showSprout && i === total - 1;
    const x = 34 + slots[i % slots.length] * 36.5 + Math.floor(i / slots.length) * 18;
    const baseY = groundY + ((i * 7) % 10);
    const h = isSprout ? 22 : 42 + ((i * 19) % 26);
    const topY = baseY - h;
    const stem = `<path d="M0 ${baseY} Q3 ${baseY - h / 2} 0 ${topY + 5}" fill="none" stroke="${GARDEN.stem}" stroke-width="4.5" stroke-linecap="round"/>`;
    const leaf = `<ellipse cx="-8" cy="${baseY - h / 2.4}" rx="8" ry="4" fill="${GARDEN.stem}" transform="rotate(-32 -8 ${baseY - h / 2.4})"/>`;

    /* The position lives on an inner group: the CSS sway animation
       replaces the outer group's transform, so it must carry none. */
    if (isSprout) {
      flowers += `<g class="sway"><g transform="translate(${x} 0)">${stem}
        <ellipse cx="-7" cy="${topY + 3}" rx="8" ry="4.5" fill="${GARDEN.stem}" transform="rotate(-35 -7 ${topY + 3})"/>
        <ellipse cx="7" cy="${topY + 3}" rx="8" ry="4.5" fill="${GARDEN.stem}" transform="rotate(35 7 ${topY + 3})"/>
      </g></g>`;
    } else {
      flowers += `<g class="sway"><g transform="translate(${x} 0)">${stem}${leaf}${flowerHead(flowerFor(i), topY)}</g></g>`;
    }
  }

  let rays = "";
  for (let r = 0; r < 8; r++) {
    const ang = (Math.PI * 2 * r) / 8 + 0.39;
    rays += `<line x1="${(300 + 30 * Math.cos(ang)).toFixed(1)}" y1="${(52 + 30 * Math.sin(ang)).toFixed(1)}" x2="${(300 + 40 * Math.cos(ang)).toFixed(1)}" y2="${(52 + 40 * Math.sin(ang)).toFixed(1)}" stroke="${GARDEN.sun}" stroke-width="4.5" stroke-linecap="round"/>`;
  }

  /* Evening (7pm-6am on the phone's clock): dusk sky, moon and stars. */
  const hour = new Date().getHours();
  const night = hour >= 19 || hour < 6;
  const sky = night ? ["#DEE4F1", "#EFF3EA"] : GARDEN.sky;
  const skyLight = night
    ? `<mask id="moon-m"><rect width="360" height="240" fill="white"/><circle cx="309" cy="45" r="15" fill="black"/></mask>
       <circle cx="300" cy="50" r="17" fill="#F5C462" mask="url(#moon-m)"/>
       <circle cx="252" cy="36" r="1.8" fill="#F5C462"/><circle cx="272" cy="66" r="1.4" fill="#F5C462"/><circle cx="332" cy="76" r="1.6" fill="#F5C462"/>`
    : `<circle cx="300" cy="52" r="46" fill="url(#glow)"/>
       <circle cx="300" cy="52" r="21" fill="${GARDEN.sun}"/>
       <g class="sun-rays">${rays}</g>`;

  /* After 5 lessons, Meni moves into the garden for good. */
  const resident = count >= 5 ? MENI.group("classic", "smile", 0.27, 12, 176) : "";

  return `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${STRINGS.gardenAria(count, showSprout)}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sky[0]}"/>
        <stop offset="1" stop-color="${sky[1]}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="${GARDEN.sun}" stop-opacity="0.55"/>
        <stop offset="1" stop-color="${GARDEN.sun}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="360" height="240" fill="url(#sky)"/>
    ${skyLight}
    <path d="M0 196 Q90 178 180 190 Q270 200 360 186 L360 240 L0 240 Z" fill="${GARDEN.hillA}"/>
    <path d="M0 214 Q120 202 220 212 Q300 219 360 210 L360 240 L0 240 Z" fill="${GARDEN.hillB}"/>
    ${flowers}
    ${seasonSVG()}
    ${resident}
    ${visitorsSVG(count)}
  </svg>`;
}

/* Season touches (decorative only, from the phone's date) and the
   evening sky (from the phone's clock). The garden lives in real time. */
function seasonSVG() {
  const m = new Date().getMonth(); // 0-11
  if (m === 11 || m <= 1) {
    // winter: snow settles along the hilltops, a few flakes in the air
    return `<path d="M0 196 Q90 178 180 190 Q270 200 360 186 L360 192 Q270 206 180 196 Q90 184 0 202 Z" fill="#FFFFFF" opacity="0.9"/>
      <circle cx="60" cy="70" r="2" fill="#FFFFFF"/><circle cx="130" cy="95" r="1.6" fill="#FFFFFF"/><circle cx="250" cy="80" r="1.8" fill="#FFFFFF"/>`;
  }
  if (m >= 8 && m <= 10) {
    // fall: a pumpkin and two dropped gold leaves
    return `<g transform="translate(104 218)">
      <ellipse rx="12" ry="9" fill="#E8872B"/>
      <ellipse rx="5.5" ry="9" fill="#F49B6A"/>
      <path d="M0 -9 q3 -4 1 -7" fill="none" stroke="#6B3E14" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <ellipse cx="135" cy="224" rx="4" ry="2" fill="#F2B33D" transform="rotate(20 135 224)"/>
    <ellipse cx="86" cy="228" rx="4" ry="2" fill="#F5C462" transform="rotate(-25 86 228)"/>`;
  }
  if (m >= 2 && m <= 4) {
    // spring: a little cluster of new blossoms
    return `<g transform="translate(104 214)">
      <path d="M-8 8 Q-8 0 -6 -4 M0 8 Q0 -2 0 -6 M8 8 Q8 1 6 -3" fill="none" stroke="#6C945C" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="-6" cy="-6" r="4" fill="#F2A6B8"/><circle cx="-6" cy="-6" r="1.6" fill="#FFFFFF"/>
      <circle cx="0" cy="-8" r="4" fill="#F2A6B8"/><circle cx="0" cy="-8" r="1.6" fill="#FFFFFF"/>
      <circle cx="6" cy="-5" r="4" fill="#F2A6B8"/><circle cx="6" cy="-5" r="1.6" fill="#FFFFFF"/>
    </g>`;
  }
  // summer: a ladybug rests near the front
  return `<g transform="translate(104 219)">
    <circle r="5.5" fill="#D6452B"/>
    <path d="M0 -5.5 A5.5 5.5 0 0 1 0 5.5" fill="none" stroke="#6B3E14" stroke-width="1.2"/>
    <circle cx="-2.5" cy="-1.5" r="1.1" fill="#1B2036"/><circle cx="2.5" cy="1" r="1.1" fill="#1B2036"/><circle cx="-1.5" cy="2.5" r="1.1" fill="#1B2036"/>
    <circle cx="0" cy="-5.5" r="2.2" fill="#1B2036"/>
  </g>`;
}

/* Milestone visitors: every 5th lesson, the garden gains a resident.
   Decorative only — no streaks, no pressure, nothing is ever lost. */
function visitorsSVG(count) {
  let out = "";
  if (count >= 5) {
    out += `<g class="v-drift"><g transform="translate(84 66)">
      <g class="v-wing-l"><ellipse cx="-6.5" cy="-3" rx="6.5" ry="5" fill="#F2A6B8"/><ellipse cx="-5.5" cy="4" rx="5" ry="3.8" fill="#C9ABE3"/></g>
      <g class="v-wing-r"><ellipse cx="6.5" cy="-3" rx="6.5" ry="5" fill="#F2A6B8"/><ellipse cx="5.5" cy="4" rx="5" ry="3.8" fill="#C9ABE3"/></g>
      <ellipse rx="2.2" ry="7" fill="#6B3E14"/>
      <path d="M-1.5 -6 Q-4 -11 -6 -11 M1.5 -6 Q4 -11 6 -11" fill="none" stroke="#6B3E14" stroke-width="1.4" stroke-linecap="round"/>
    </g></g>`;
  }
  if (count >= 10) {
    out += `<g class="v-float"><path d="M148 52 Q155 44 162 52 M162 52 Q169 44 176 52" fill="none" stroke="#7A93A8" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M104 66 Q109 60 114 66 M114 66 Q119 60 124 66" fill="none" stroke="#7A93A8" stroke-width="2" stroke-linecap="round"/></g>`;
  }
  if (count >= 15) {
    out += `<g class="v-bob"><g transform="translate(224 104)">
      <ellipse cx="-1" cy="-5" rx="4" ry="2.6" fill="#FFFFFF" opacity="0.85"/>
      <ellipse rx="6" ry="4.2" fill="#F5C462"/>
      <path d="M-2 -4 V4 M2 -4 V4" stroke="#6B3E14" stroke-width="1.6"/>
      <circle cx="5" cy="-1" r="1" fill="#1B2036"/>
    </g></g>`;
  }
  if (count >= 20) {
    out += `<g transform="translate(310 0)">
      <ellipse cx="0" cy="224" rx="14" ry="4" fill="#8FA6B8"/>
      <path d="M-4 224 h8 v-16 h-8 z" fill="#9FB4C4"/>
      <ellipse cx="0" cy="206" rx="17" ry="6" fill="#9FB4C4"/>
      <ellipse cx="0" cy="204.5" rx="12" ry="4" fill="#A9CDE3"/>
      <g transform="translate(11 197)">
        <circle r="5" fill="#E8872B"/>
        <circle cx="3" cy="-1.5" r="0.9" fill="#1B2036"/>
        <path d="M5 0 l4 1.5 -4 1.5 z" fill="#F5C462"/>
        <path d="M-4.5 1 q-3 2 -1 4" fill="none" stroke="#6B3E14" stroke-width="1.3" stroke-linecap="round"/>
      </g>
    </g>`;
  }
  return out;
}

function renderGarden() {
  stopSpeaking();
  const count = state.completed.length;
  const next = nextLesson();
  const canActToday = next && !completedToday() && !wateredToday();
  const watering = isWateringDay();

  /* Welcome-back logic: warm, never a count of missed days. */
  let message = STRINGS.gardenGrowing;
  if (!next) message = STRINGS.allDone;
  else if (state.wasAway) message = STRINGS.welcomeBack;
  else if (completedToday()) message = STRINGS.doneToday;
  else if (wateredToday()) message = STRINGS.wateredToday;

  const officeCard = state.officeHoursDate
    ? `<div class="card card-row">
        ${ICONS.calendar}
        <span style="font-weight:700">${STRINGS.officeHours(friendlyDate(state.officeHoursDate))}</span>
      </div>`
    : "";

  const savedList = state.saved.length
    ? `<div class="card saved-questions">
        <h2>${STRINGS.savedQuestionsTitle}</h2>
        <ul>${state.saved.map((q) => `<li>${esc(q.title)}</li>`).join("")}</ul>
      </div>`
    : "";

  app().innerHTML = `
    ${header()}
    <main>
      <h1>${STRINGS.yourGarden}</h1>
      <div class="lessons-learned">
        <span class="big">${count}</span>
        <span class="rest">${STRINGS.lessonsLearnedWord(count)}</span>
      </div>
      <div class="garden-hero">${gardenSVG(count)}</div>
      <div class="meni-says">
        <div class="meni-avatar">${MENI.classic("smile")}</div>
        <div class="bubble" role="status">${greeting()} ${message}</div>
      </div>
      ${officeCard}
      ${savedList}
      ${canActToday ? `
        <div class="btn-stack">
          <button type="button" class="btn-primary" id="start-lesson">${watering ? STRINGS.waterBtn : STRINGS.startLesson}</button>
        </div>` : ""}
      ${count >= 3 ? `
        <div class="btn-stack">
          <button type="button" class="btn-secondary" id="skills-btn">${ICONS.spark}${STRINGS.skillsBtn}</button>
        </div>` : ""}
    </main>`;

  wireHeader("garden");
  const start = document.getElementById("start-lesson");
  if (start)
    start.addEventListener("click", () =>
      watering ? renderWateringAsk() : renderLessonTeach(next)
    );
  const skillsBtn = document.getElementById("skills-btn");
  if (skillsBtn) skillsBtn.addEventListener("click", renderSkills);
  focusScreen();
}

/* ---------------- Facilitator setup (hidden route: #setup) ---------------- */

function renderSetup() {
  stopSpeaking();
  const packs = [
    { key: "everyday", label: "Everyday life examples" },
    { key: "work", label: "Work and rights examples" },
  ];

  app().innerHTML = `
    ${header()}
    <main>
      <h1>Facilitator setup</h1>
      <p>These choices are for the person setting up this phone. The learner never sees this screen or any labels from it.</p>
      <div class="setup-field">
        <label id="lang-label">Learner's language</label>
        <div class="btn-stack" role="group" aria-labelledby="lang-label" style="margin-top:0">
          <button type="button" class="btn-secondary" data-setlang="en" lang="en">English</button>
          <button type="button" class="btn-secondary" data-setlang="es" lang="es">Español</button>
        </div>
      </div>
      <div class="setup-field">
        <label id="pack-label">Example pack for later lessons</label>
        <div class="btn-stack" role="group" aria-labelledby="pack-label" style="margin-top:0">
          ${packs
            .map(
              (p) =>
                `<button type="button" class="btn-secondary" data-pack="${p.key}">${p.label}</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="setup-field">
        <label for="office-date">Next office hours date</label>
        <input type="date" id="office-date" value="${state.officeHoursDate || ""}">
      </div>
      <div class="setup-field">
        <label for="replant">Replant a garden (lessons already learned)</label>
        <input type="number" id="replant" inputmode="numeric" min="0" max="${sequence().length}" value="${state.completed.length}">
        <p class="footnote" style="margin-top:8px">For a new or replaced phone: enter how many lessons the learner had finished. The garden regrows instantly, and today's lesson stays available.</p>
      </div>
      <div class="setup-field">
        <label id="voice-label">Read-aloud voice (this phone's best voices for the learner's language)</label>
        <div class="btn-stack" role="group" aria-labelledby="voice-label" style="margin-top:0" id="voice-list"></div>
        <p class="footnote" style="margin-top:8px">Tap a voice to hear it and choose it. Recorded human audio, when added, always plays instead (see the project's audio guide).</p>
      </div>
      <div class="setup-field">
        <label id="chime-label">Soft chime when a flower grows</label>
        <div class="btn-stack" role="group" aria-labelledby="chime-label" style="margin-top:0">
          <button type="button" class="btn-secondary" data-chime="on">Chime on</button>
          <button type="button" class="btn-secondary" data-chime="off">Chime off</button>
        </div>
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="setup-done">Done — back to Meni</button>
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-quiet" id="reset-btn">Start over (erase all progress on this phone)</button>
      </div>
      <p class="footnote center">${STRINGS.trustLine}</p>
    </main>`;

  wireHeader();

  const langButtons = app().querySelectorAll("[data-setlang]");
  function markLang() {
    langButtons.forEach((b) =>
      b.classList.toggle("selected", b.dataset.setlang === (state.lang || "en"))
    );
  }
  markLang();
  langButtons.forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.setlang);
      saveState();
      markLang();
      renderVoiceList(); // voices differ per language
    })
  );

  const packButtons = app().querySelectorAll("[data-pack]");
  function markPack() {
    packButtons.forEach((b) => b.classList.toggle("selected", b.dataset.pack === state.pack));
  }
  markPack();
  packButtons.forEach((b) =>
    b.addEventListener("click", () => {
      state.pack = b.dataset.pack;
      saveState();
      markPack();
    })
  );

  document.getElementById("office-date").addEventListener("change", (e) => {
    state.officeHoursDate = e.target.value || null;
    saveState();
  });

  /* Voice chooser: the top-ranked voices for the learner's language.
     Tapping previews AND selects — hearing it is the only way to judge. */
  function renderVoiceList() {
    const list = document.getElementById("voice-list");
    if (!list) return;
    const lang = state.lang || "en";
    const options = voicesFor(lang).slice(0, 6);
    if (!options.length) {
      list.innerHTML = `<p class="footnote" style="margin:0">No voices found on this phone yet — try again after the page finishes loading.</p>`;
      return;
    }
    const chosen = (state.voice && state.voice[lang]) || options[0].name;
    list.innerHTML = options
      .map(
        (v) =>
          `<button type="button" class="btn-secondary${v.name === chosen ? " selected" : ""}" data-voice="${esc(v.name)}">${esc(v.name.replace(/\s*\(.*\)\s*$/, ""))}</button>`
      )
      .join("");
    list.querySelectorAll("[data-voice]").forEach((b) =>
      b.addEventListener("click", () => {
        if (!state.voice) state.voice = { en: null, es: null };
        state.voice[lang] = b.dataset.voice;
        saveState();
        stopSpeaking();
        const v = voicesFor(lang).find((x) => x.name === b.dataset.voice);
        speakSynth(lang === "es" ? I18N.es.hello + " " + I18N.es.gardenGrowing : I18N.en.hello + " " + I18N.en.gardenGrowing, v);
        renderVoiceList();
      })
    );
  }
  renderVoiceList();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.addEventListener?.("voiceschanged", renderVoiceList, { once: true });
  }

  const chimeButtons = app().querySelectorAll("[data-chime]");
  function markChime() {
    chimeButtons.forEach((b) =>
      b.classList.toggle("selected", (b.dataset.chime === "on") === state.chime)
    );
  }
  markChime();
  chimeButtons.forEach((b) =>
    b.addEventListener("click", () => {
      state.chime = b.dataset.chime === "on";
      saveState();
      markChime();
      if (state.chime) playChime();
    })
  );

  /* Replant: rebuild progress as the first N lessons, dated long ago so
     today's lesson is still available. The garden never shrinks by
     accident — this is a deliberate facilitator action. */
  document.getElementById("replant").addEventListener("change", (e) => {
    const n = Math.max(0, Math.min(sequence().length, Number(e.target.value) || 0));
    e.target.value = n;
    if (n === state.completed.length) return;
    state.completed = sequence()
      .slice(0, n)
      .map((l) => ({ id: l.id, date: "1970-01-01" }));
    saveState();
  });

  document.getElementById("setup-done").addEventListener("click", () => {
    if (location.hash === "#setup") {
      history.replaceState(null, "", location.pathname + location.search);
    }
    renderHome();
  });

  /* Two-step erase, inline (no popups anywhere in the app). */
  const resetBtn = document.getElementById("reset-btn");
  let armed = false;
  resetBtn.addEventListener("click", () => {
    if (!armed) {
      armed = true;
      resetBtn.textContent = "Tap again to erase everything";
      resetBtn.className = "btn-secondary";
      return;
    }
    localStorage.removeItem(STORE_KEY);
    state = defaultState();
    setLang("en");
    state.lang = null; // the next learner picks their own language
    applyScale("A");
    renderLanguagePick();
  });
  focusScreen();
}

/* ---------------- Routing ---------------- */

function renderHome() {
  if (!state.lang) {
    renderLanguagePick();
    return;
  }
  if (!state.textScale) {
    renderSizeChooser();
    return;
  }
  applyScale(state.textScale);
  if (!state.favAsked) {
    renderColorPick();
    return;
  }
  const next = nextLesson();
  if (!next || completedToday() || wateredToday()) renderGarden();
  else if (isWateringDay()) renderWateringAsk();
  else renderLessonTeach(next);
}

function boot() {
  /* Was the learner away? Decide before stamping today's visit.
     "Away" means at least one full missed day — never counted, never shown. */
  const t = todayStr();
  state.wasAway = Boolean(state.lastVisit && daysBetween(state.lastVisit, t) >= 2);
  state.lastVisit = t;
  saveState();

  /* Load strings for the saved language; phones set up before the
     language choice existed keep English until they pick otherwise. */
  if (state.lang) setLang(state.lang);

  if (state.textScale) applyScale(state.textScale);

  if (location.hash === "#setup") renderSetup();
  else renderHome();

  window.addEventListener("hashchange", () => {
    if (location.hash === "#setup") renderSetup();
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* Offline support is a bonus, never a blocker. */
    });
  }
}

document.addEventListener("DOMContentLoaded", boot);
