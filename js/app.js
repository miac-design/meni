/* Meni v0 — app logic.
   Everything lives on this phone. No accounts, no servers, no analytics.
   Navigation is linear and tiny: each lesson is three small steps
   (learn → question → Meni answers), one screen at a time. */

"use strict";

/* ---------------- UI strings (kept together: translation-ready) ---------------- */

const STRINGS = {
  appName: "Meni",
  hello: "Hi, I'm Meni.",
  sizeSample: "Can you read this comfortably?",
  sizeConfirm: "This size is good",
  sizeLabel: "Text size",
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
  trustLine: "Meni is a free learning companion from Austin AI Hub. Everything stays on this phone.",
  setupLink: "Facilitator setup",
};

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
    textScale: null, // 'A' | 'AA' | 'AAA'
    pack: "everyday",
    officeHoursDate: null, // 'YYYY-MM-DD'
    completed: [], // [{ id, date }]
    lastVisit: null, // 'YYYY-MM-DD'
    saved: [], // [{ title, question }]
    chime: true, // soft chime when a flower grows
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
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning!";
  if (h < 17) return "Good afternoon!";
  return "Good evening!";
}

/* ---------------- Lesson progress ---------------- */

function sequence() {
  return lessonSequence(state.pack);
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

/* ---------------- Audio: "Read it to me" (Web Speech API) ---------------- */

let speaking = false;

function setTalking(on) {
  document.querySelectorAll(".meni-holder").forEach((el) => el.classList.toggle("talking", on));
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speaking = false;
  setTalking(false);
  const btn = document.getElementById("read-btn");
  if (btn) btn.querySelector(".read-label").textContent = STRINGS.readToMe;
}

function toggleSpeak(text) {
  if (!("speechSynthesis" in window)) return;
  if (speaking) {
    stopSpeaking();
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.95;
  u.onend = () => stopSpeaking();
  u.onerror = () => stopSpeaking();
  speaking = true;
  setTalking(true);
  const btn = document.getElementById("read-btn");
  if (btn) btn.querySelector(".read-label").textContent = STRINGS.stopReading;
  window.speechSynthesis.speak(u);
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
};

/* ---------------- Rendering helpers ---------------- */

const app = () => document.getElementById("app");

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

function wireRead(text) {
  document.getElementById("read-btn").addEventListener("click", () => toggleSpeak(text));
}

function alertBanner(lesson) {
  return lesson.alert
    ? `<div class="alert-banner">${ICONS.warn}<span>${STRINGS.scamAlert}</span></div>`
    : "";
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
        <button type="button" class="size-a" data-size="A">A<span class="size-label">Regular</span></button>
        <button type="button" class="size-aa" data-size="AA">AA<span class="size-label">Large</span></button>
        <button type="button" class="size-aaa" data-size="AAA">AAA<span class="size-label">Largest</span></button>
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
  wireRead(`${lesson.title}. ${lesson.teach}`);
  document.getElementById("next-btn").addEventListener("click", () => renderLessonAsk(lesson));

  /* Skip-ahead path: never feels like a test. The flower still grows. */
  document.getElementById("skip-btn").addEventListener("click", () => {
    completeLesson(lesson.id);
    const next = nextLesson();
    if (next) renderLessonTeach(next);
    else renderGarden();
  });
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
    `${lesson.question} Your choices are: ${lesson.answers.map((a) => a.label).join(", or ")}.`
  );

  app().querySelectorAll("#answers button").forEach((btn) =>
    btn.addEventListener("click", () => {
      completeLesson(lesson.id);
      playChime();
      renderLessonDone(lesson, Number(btn.dataset.answer));
    })
  );
}

/* Step 3 of 3: Meni answers, warmly. No scores, no X marks, ever.
   The first answer is always the confident path (delighted Meni);
   the second is the gentler path (curious Meni, head tilted, never
   cross). Both get equally warm words. */
function renderLessonDone(lesson, answerIdx) {
  stopSpeaking();
  const response = lesson.answers[answerIdx].response;
  const avatar = answerIdx === 0 ? MENI.waving("delighted") : MENI.classic("curious");

  app().innerHTML = `
    ${header()}
    <main>
      ${stepDots(3)}
      <div class="meni-says">
        <div class="meni-avatar meni-holder">${avatar}</div>
        <div class="bubble teach-text" role="status">${esc(response)}</div>
      </div>
      ${bloomFigure()}
      ${readButton()}
      <div class="btn-stack">
        <button type="button" class="btn-secondary" id="save-question">${STRINGS.saveForMia}</button>
        <button type="button" class="btn-primary" id="see-garden">${STRINGS.seeGarden}</button>
      </div>
    </main>`;

  wireHeader("lesson");
  wireRead(response);

  document.getElementById("save-question").addEventListener("click", (e) => {
    if (!state.saved.some((q) => q.title === lesson.title)) {
      state.saved.push({ title: lesson.title, question: lesson.question });
      saveState();
    }
    e.currentTarget.textContent = STRINGS.savedForMia;
    e.currentTarget.disabled = true;
  });

  document.getElementById("see-garden").addEventListener("click", renderGarden);
}

/* The just-earned flower sprouts and opens on the response screen,
   then appears planted in the garden. */
function bloomFigure() {
  const count = state.completed.length;
  if (!count) return "";
  const f = GARDEN.flowers[(count - 1) % GARDEN.flowers.length];
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
      <span class="bloom-caption">${STRINGS.newFlower}</span>
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
      const f = GARDEN.flowers[i % GARDEN.flowers.length];
      flowers += `<g class="sway"><g transform="translate(${x} 0)">${stem}${leaf}${flowerHead(f, topY)}</g></g>`;
    }
  }

  let rays = "";
  for (let r = 0; r < 8; r++) {
    const ang = (Math.PI * 2 * r) / 8 + 0.39;
    rays += `<line x1="${(300 + 30 * Math.cos(ang)).toFixed(1)}" y1="${(52 + 30 * Math.sin(ang)).toFixed(1)}" x2="${(300 + 40 * Math.cos(ang)).toFixed(1)}" y2="${(52 + 40 * Math.sin(ang)).toFixed(1)}" stroke="${GARDEN.sun}" stroke-width="4.5" stroke-linecap="round"/>`;
  }

  return `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A garden with ${count} flowers, one for each lesson learned${showSprout ? ", and a new sprout for tomorrow" : ""}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${GARDEN.sky[0]}"/>
        <stop offset="1" stop-color="${GARDEN.sky[1]}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="${GARDEN.sun}" stop-opacity="0.55"/>
        <stop offset="1" stop-color="${GARDEN.sun}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="360" height="240" fill="url(#sky)"/>
    <circle cx="300" cy="52" r="46" fill="url(#glow)"/>
    <circle cx="300" cy="52" r="21" fill="${GARDEN.sun}"/>
    <g class="sun-rays">${rays}</g>
    <path d="M0 196 Q90 178 180 190 Q270 200 360 186 L360 240 L0 240 Z" fill="${GARDEN.hillA}"/>
    <path d="M0 214 Q120 202 220 212 Q300 219 360 210 L360 240 L0 240 Z" fill="${GARDEN.hillB}"/>
    ${flowers}
    ${visitorsSVG(count)}
  </svg>`;
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
  const canLearnToday = next && !completedToday();

  /* Welcome-back logic: warm, never a count of missed days. */
  let message = STRINGS.gardenGrowing;
  if (!next) message = STRINGS.allDone;
  else if (state.wasAway) message = STRINGS.welcomeBack;
  else if (completedToday()) message = STRINGS.doneToday;

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
      ${canLearnToday ? `
        <div class="btn-stack">
          <button type="button" class="btn-primary" id="start-lesson">${STRINGS.startLesson}</button>
        </div>` : ""}
    </main>`;

  wireHeader("garden");
  const start = document.getElementById("start-lesson");
  if (start) start.addEventListener("click", () => renderLessonTeach(next));
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
    applyScale("A");
    renderSizeChooser();
  });
}

/* ---------------- Routing ---------------- */

function renderHome() {
  if (!state.textScale) {
    renderSizeChooser();
    return;
  }
  applyScale(state.textScale);
  const next = nextLesson();
  if (next && !completedToday()) renderLessonTeach(next);
  else renderGarden();
}

function boot() {
  /* Was the learner away? Decide before stamping today's visit.
     "Away" means at least one full missed day — never counted, never shown. */
  const t = todayStr();
  state.wasAway = Boolean(state.lastVisit && daysBetween(state.lastVisit, t) >= 2);
  state.lastVisit = t;
  saveState();

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
