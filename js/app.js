/* Meni v0 — app logic.
   Everything lives on this phone. No accounts, no servers, no analytics.
   Screens: size chooser, daily lesson, garden, facilitator setup.
   Navigation is linear: forward through the lesson, one screen at a time. */

"use strict";

/* ---------------- UI strings (kept together: translation-ready) ---------------- */

const STRINGS = {
  appName: "Meni",
  hello: "Hi, I'm Meni.",
  helloSub: "I'll teach you one small thing about AI each day. It only takes a minute or two.",
  sizeQuestion: "Can you read this comfortably?",
  sizeSample: "Can you read this comfortably?",
  sizeConfirm: "This size is good",
  sizeLabel: "Text size",
  day: "Day",
  readToMe: "Read it to me",
  stopReading: "Stop reading",
  saveForMia: "Save this question for Mia",
  savedForMia: "Saved! Bring it to office hours.",
  seeGarden: "See my garden",
  skipAhead: "I know this one — show me the next lesson",
  yourGarden: "Your garden",
  lessonsLearned: (n) => (n === 1 ? "1 lesson learned" : `${n} lessons learned`),
  welcomeBack: "Welcome back! Your garden waited for you.",
  doneToday: "That's your lesson for today. Come back tomorrow for a new one!",
  gardenGrowing: "Your garden is growing, one lesson at a time.",
  allDone: "You've finished every lesson for now. New ones are coming — see you at office hours!",
  startLesson: "Start today's lesson",
  officeHours: (date) => `Bring a question to office hours, ${date}.`,
  officeHoursNoDate: "Bring a question to the next office hours.",
  savedQuestionsTitle: "Your questions for office hours",
  scamAlert: "Take care: this lesson is about scams",
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

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speaking = false;
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
  const btn = document.getElementById("read-btn");
  if (btn) btn.querySelector(".read-label").textContent = STRINGS.stopReading;
  window.speechSynthesis.speak(u);
}

/* ---------------- Small inline icons (always paired with text labels) ---------------- */

const ICONS = {
  speaker: `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 9c1 .8 1.5 1.8 1.5 3s-.5 2.2-1.5 3M18.5 6.5c1.7 1.4 2.5 3.3 2.5 5.5s-.8 4.1-2.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="8.5" cy="14" r="1.6" fill="currentColor"/><circle cx="13" cy="14" r="1.6" fill="currentColor"/><circle cx="17.5" cy="14" r="1.6" fill="currentColor"/></svg>`,
  hand: `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false"><path d="M12 3v10M12 3l-3.5 3.5M12 3l3.5 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" transform="rotate(180 12 9.5)"/><path d="M6 14c0 4 2.5 7 6 7s6-3 6-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3L2.5 20h19L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.4" fill="currentColor"/></svg>`,
};

/* ---------------- Rendering helpers ---------------- */

const app = () => document.getElementById("app");

function esc(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[ch]);
}

function header(dayNumber) {
  const day = dayNumber
    ? `<span class="day-count">${STRINGS.day} ${dayNumber}</span>`
    : "";
  return `
    <header class="app-header">
      <div class="brand">${MENI.mark}<span>${STRINGS.appName}</span>${day}</div>
      <button class="btn-secondary btn-small" id="text-size-btn" type="button">
        <span aria-hidden="true" style="font-weight:700">Aa</span> ${STRINGS.sizeLabel}
      </button>
    </header>`;
}

function wireHeader(returnTo) {
  const btn = document.getElementById("text-size-btn");
  if (btn) btn.addEventListener("click", () => renderSizeChooser({ returnTo }));
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
        <div class="meni-figure">${MENI.classic}</div>
        <h1 class="center">${STRINGS.hello}</h1>
        <p class="center">${STRINGS.helloSub}</p>` : ""}
      <h2>${STRINGS.sizeQuestion}</h2>
      <div class="sample-sentence" id="size-sample">${STRINGS.sizeSample}</div>
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

/* ---------------- Screen 2: daily lesson ---------------- */

function renderLesson(lesson) {
  stopSpeaking();
  const dayNumber = state.completed.length + 1; // only ever counts up

  const answerButtons = lesson.answers
    .map(
      (a, i) => `
      <button type="button" class="${i === 0 ? "btn-primary" : "btn-secondary"}" data-answer="${i}">
        ${esc(a.label)}
      </button>`
    )
    .join("");

  app().innerHTML = `
    ${header(dayNumber)}
    <main>
      ${lesson.alert ? `
        <div class="alert-banner">${ICONS.warn}<span>${STRINGS.scamAlert}</span></div>` : ""}
      <h1>${esc(lesson.title)}</h1>
      <p class="teach-text">${esc(lesson.teach)}</p>
      <button type="button" class="btn-secondary" id="read-btn">
        ${ICONS.speaker}<span class="read-label">${STRINGS.readToMe}</span>
      </button>
      <p class="question-text">${esc(lesson.question)}</p>
      <div class="btn-stack" id="answers">${answerButtons}</div>
      <div class="feedback-box" id="feedback" role="status" aria-live="polite" hidden></div>
      <div class="btn-stack" id="after-answer" hidden>
        <button type="button" class="btn-secondary" id="save-question">${STRINGS.saveForMia}</button>
        <button type="button" class="btn-primary" id="see-garden">${STRINGS.seeGarden}</button>
      </div>
      <div class="btn-stack" id="skip-row">
        <button type="button" class="btn-quiet" id="skip-btn">${STRINGS.skipAhead}</button>
      </div>
    </main>`;

  wireHeader("lesson");

  let answered = false;

  function readableText() {
    let text = `${lesson.title}. ${lesson.teach} ${lesson.question} Your choices are: ${lesson.answers
      .map((a) => a.label)
      .join(", or ")}.`;
    if (answered !== false) text += ` ${lesson.answers[answered].response}`;
    return text;
  }

  document
    .getElementById("read-btn")
    .addEventListener("click", () => toggleSpeak(readableText()));

  app().querySelectorAll("#answers button").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (answered !== false) return;
      answered = Number(btn.dataset.answer);
      btn.classList.add("selected");
      app().querySelectorAll("#answers button").forEach((b) => (b.disabled = true));
      btn.disabled = false; // keep the chosen answer readable at full strength

      const fb = document.getElementById("feedback");
      fb.textContent = lesson.answers[answered].response;
      fb.hidden = false;

      completeLesson(lesson.id);
      document.getElementById("after-answer").hidden = false;
      document.getElementById("skip-row").hidden = true;
    })
  );

  document.getElementById("save-question").addEventListener("click", (e) => {
    if (!state.saved.some((q) => q.title === lesson.title)) {
      state.saved.push({ title: lesson.title, question: lesson.question });
      saveState();
    }
    e.currentTarget.textContent = STRINGS.savedForMia;
    e.currentTarget.disabled = true;
  });

  document.getElementById("see-garden").addEventListener("click", renderGarden);

  /* Skip-ahead path: never feels like a test. The flower still grows. */
  document.getElementById("skip-btn").addEventListener("click", () => {
    completeLesson(lesson.id);
    const next = nextLesson();
    if (next) renderLesson(next);
    else renderGarden();
  });
}

/* ---------------- Screen 3: the garden ---------------- */

function gardenSVG(count) {
  const petalColors = ["#E8872B", "#D6452B", "#F2B33D"];
  const soilY = 168;
  let flowers = "";

  /* Fixed planting slots: each flower keeps its spot forever as the
     garden grows, and neighbors never crowd each other. */
  const slots = [0, 4, 8, 2, 6, 1, 5, 3, 7];

  for (let i = 0; i < count; i++) {
    const isSprout = i === count - 1;
    const x = 34 + slots[i % slots.length] * 36.5 + Math.floor(i / slots.length) * 18;
    const h = isSprout ? 20 : 38 + ((i * 19) % 24);
    const topY = soilY - h;
    const stem = `<path d="M${x} ${soilY} Q${x + 3} ${soilY - h / 2} ${x} ${topY}" fill="none" stroke="#C9A227" stroke-width="4" stroke-linecap="round"/>`;
    const leaf = `<ellipse cx="${x - 7}" cy="${soilY - h / 2.5}" rx="7" ry="3.5" fill="#C9A227" transform="rotate(-30 ${x - 7} ${soilY - h / 2.5})"/>`;

    if (isSprout) {
      flowers += `<g>${stem}
        <ellipse cx="${x - 6}" cy="${topY + 3}" rx="7" ry="4" fill="#C9A227" transform="rotate(-35 ${x - 6} ${topY + 3})"/>
        <ellipse cx="${x + 6}" cy="${topY + 3}" rx="7" ry="4" fill="#C9A227" transform="rotate(35 ${x + 6} ${topY + 3})"/>
      </g>`;
    } else {
      const color = petalColors[i % petalColors.length];
      let petals = "";
      for (let p = 0; p < 6; p++) {
        const ang = (Math.PI * 2 * p) / 6;
        petals += `<circle cx="${(x + 9 * Math.cos(ang)).toFixed(1)}" cy="${(topY + 9 * Math.sin(ang)).toFixed(1)}" r="6.5" fill="${color}"/>`;
      }
      flowers += `<g>${stem}${leaf}${petals}<circle cx="${x}" cy="${topY}" r="6" fill="#FFF9F2" stroke="#C9A227" stroke-width="2"/></g>`;
    }
  }

  let rays = "";
  for (let r = 0; r < 8; r++) {
    const ang = (Math.PI * 2 * r) / 8;
    rays += `<line x1="${(52 + 30 * Math.cos(ang)).toFixed(1)}" y1="${(46 + 30 * Math.sin(ang)).toFixed(1)}" x2="${(52 + 40 * Math.cos(ang)).toFixed(1)}" y2="${(46 + 40 * Math.sin(ang)).toFixed(1)}" stroke="#F2B33D" stroke-width="4" stroke-linecap="round"/>`;
  }

  return `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A garden with ${count} flowers, one for each lesson learned">
    <circle cx="52" cy="46" r="22" fill="#F2B33D"/>${rays}
    ${flowers}
    <rect x="0" y="${soilY}" width="360" height="32" rx="8" fill="#6B3E14"/>
  </svg>`;
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

  const office = state.officeHoursDate
    ? STRINGS.officeHours(friendlyDate(state.officeHoursDate))
    : STRINGS.officeHoursNoDate;

  const savedList = state.saved.length
    ? `<div class="saved-questions">
        <h2>${STRINGS.savedQuestionsTitle}</h2>
        <ul>${state.saved.map((q) => `<li>${esc(q.title)}</li>`).join("")}</ul>
      </div>`
    : "";

  app().innerHTML = `
    ${header()}
    <main>
      <h1>${STRINGS.yourGarden}</h1>
      <p class="lessons-learned">${STRINGS.lessonsLearned(count)}</p>
      <div class="garden-scene">${gardenSVG(count)}</div>
      <div class="feedback-box" role="status">${message}</div>
      <div class="card">
        ${ICONS.calendar}
        <span>${office}</span>
      </div>
      ${savedList}
      ${canLearnToday ? `
        <div class="btn-stack">
          <button type="button" class="btn-primary" id="start-lesson">${STRINGS.startLesson}</button>
        </div>` : ""}
      <p class="footnote center">${STRINGS.trustLine}</p>
    </main>`;

  wireHeader("garden");
  const start = document.getElementById("start-lesson");
  if (start) start.addEventListener("click", () => renderLesson(next));
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
      <div class="btn-stack">
        <button type="button" class="btn-primary" id="setup-done">Done — back to Meni</button>
      </div>
      <div class="btn-stack">
        <button type="button" class="btn-quiet" id="reset-btn">Start over (erase all progress on this phone)</button>
      </div>
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
  if (next && !completedToday()) renderLesson(next);
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
