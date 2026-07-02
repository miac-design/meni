# Meni — AI literacy in two minutes a day

Meni is a daily micro-learning PWA that teaches AI skills, one small lesson a
day, built seniors-first for Austin AI Hub's programs. One idea per screen,
one tap to answer, a garden that only grows and never resets, and a standing
bridge to monthly office hours.

This is the **v0 prototype**: a fully static app with no build step, no
dependencies, no accounts, no servers, and no analytics. All progress lives in
`localStorage` on the learner's phone and nowhere else.

## Run it

Serve the folder with any static file server, for example:

```
npx http-server -p 8080
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`. To install on a phone, open the deployed
URL in the phone's browser and use "Add to Home Screen" — the facilitator does
this together with the learner. After the first load, the app works offline.

## Facilitator setup

Open the app with `#setup` at the end of the URL (for example
`https://your-host/meni/#setup`), or tap the small "Facilitator setup" link on
the very first screen. There you can:

- pick the example pack for later lessons ("Everyday life" or "Work and rights" —
  the learner never sees these labels),
- set the next office hours date (shown on the garden screen),
- erase all progress on the phone (two taps, for re-gifting a device).

## Structure

```
index.html            app shell (three screens rendered by js/app.js)
css/styles.css        design tokens: mint #F3F8EE, sage #E4F0DB, navy #1B2036, orange #E8872B
js/meni.js            Meni the bear — three inline SVG poses
js/lessons.js         lesson content as plain data (core course + packs)
js/app.js             screens, one-lesson-per-day gating, garden, audio, storage
sw.js                 service worker: cache-first, offline after first load
manifest.webmanifest  PWA manifest
icons/                generated PNGs (see tools/make-icons.mjs)
tools/make-icons.mjs  regenerates the icons: node tools/make-icons.mjs
```

## Design rules baked in (do not undo casually)

- Navy carries all words; orange never carries text (contrast for aging eyes).
- Red appears only inside scam-alert lessons. Never for errors or feedback.
- Minimum 60px touch targets, taps only, no gestures, no modals, no timers.
- Every icon has a visible text label. Sentence case everywhere.
- Text sizes are `rem`-based so the phone's system font setting scales the
  whole app; the in-app A / AA / AAA chooser multiplies on top of it.
- The garden never resets and missed days are never counted or mentioned.
- Audio ("Read it to me") is on every lesson via the Web Speech API.

## Adding lessons

Edit `js/lessons.js`. Each lesson is:

```js
{
  id: "core-6",
  title: "Lesson title",
  teach: "Two to three short sentences, about a 5th grade reading level.",
  question: "One question?",
  answers: [
    { label: "First choice", response: "Warm response." },
    { label: "Second choice", response: "Warm response — never shaming." },
  ],
  alert: true, // ONLY for scam-spotting lessons
}
```

Bump `CACHE` in `sw.js` whenever content or code changes so installed phones
pick up the new version.

## Roadmap (post-pilot, per the project spec)

- Vercel hosting + Supabase-managed lesson content (progress stays on-device).
- Recorded human audio replacing synthesized speech.
- Spanish. All copy is centralized in `STRINGS` (js/app.js) and
  `js/lessons.js` to keep translation straightforward.
