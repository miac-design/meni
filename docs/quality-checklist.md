# Meni — best-in-class microlearning checklist

Fifty criteria for a best-of-its-kind microlearning product for senior
citizens and survivors of trafficking, drawn from microlearning research
(retrieval practice, spacing, transfer), WCAG 2.2, senior-UX practice,
trauma-informed design principles, and scam-inoculation research
("prebunking"). Every checkmark states where the criterion is met in the
code, so it can be re-verified at any time. Independent design, learning
science, and accessibility reviews drove the last round of fixes
(July 2026).

## A. Learning science (10/10)

1. ✅ **One concept per lesson, 2–3 sentences** — writing rules in
   `js/lessons.js` header; enforced by review.
2. ✅ **Two minutes or less per day** — three small steps
   (teach → question → response), one decision per screen (`js/app.js`).
3. ✅ **Retrieval practice on every lesson** — one question, plausible
   alternatives (strawman distractors rewritten after review: core-4,
   ev-1).
4. ✅ **Answer order and styling never reveal the correct choice** —
   per-day shuffle + two visually equal buttons
   (`orderedAnswers`/`.btn-choice`, `js/app.js`). Before this fix the
   correct answer was always the highlighted top button.
5. ✅ **Spaced repetition** — "watering days" re-ask an earlier lesson
   every 4th day, cycling oldest-first (`isWateringDay`, `js/app.js`).
6. ✅ **Immediate, warm feedback — both answers, never punitive** — every
   answer has its own kind response; no scores, no X marks, ever.
7. ✅ **Teach-back prompts** — `share` lines turn learners into
   messengers (the strongest consolidation move; e.g. the gift-card rule).
8. ✅ **Real-life transfer missions** — `mission` lines ("try it today:
   tap the microphone…").
9. ✅ **Self-efficacy by design (Bandura)** — fear-removal lesson
   (core-6 "You can't break it") early; plain-words "I can…" skills
   list ("What I can do now").
10. ✅ **Arc with recap and a human bridge** — core-10 recap; each pack
    ends by carrying the learner's own first question to office hours.

## B. Senior-first accessibility (12/12)

11. ✅ **18px base type, rem-scaled** — stacks with the phone's system
    font size (`css/styles.css`).
12. ✅ **A/AA/AAA size chooser, whole-screen live preview** — first-run
    and every screen's header.
13. ✅ **Low-vision body typeface** — Atkinson Hyperlegible (Braille
    Institute), bundled offline; Fraunces only for headings.
14. ✅ **Text contrast ≥ 4.5:1 everywhere** — orange text eliminated
    (eyebrows and counts are navy now); scam-banner text darkened to
    #B33418 on paper.
15. ✅ **Focus indicator ≥ 3:1** — navy ring (~14:1 on cream), replacing
    the failing orange ring.
16. ✅ **Touch targets ≥ 60px** — `--touch: 60px`; the header "Aa"
    button and read-aloud chip included.
17. ✅ **Zoom never blocked** — viewport allows pinch zoom;
    `-webkit-text-size-adjust: 100%`.
18. ✅ **Every animation honors reduced motion** — all keyframes inside
    `prefers-reduced-motion: no-preference` guards, with static
    fallbacks (talking mouth).
19. ✅ **Focus moves to each new screen's heading** — screens re-render
    in place; `focusScreen()` announces the change (done screens gained
    real headings so it always lands).
20. ✅ **Toggle state exposed to assistive tech** — `aria-pressed` on
    size, language, pack, chime, voice, and read-aloud controls.
21. ✅ **Meaningful graphics described, decorative ones hidden** — the
    garden has a localized, count-aware `aria-label`; every decorative
    SVG is `aria-hidden`.
22. ✅ **No gestures, no timers, no modals, no double-taps** — taps
    only, nothing expires, nothing pops over the page.

## C. Trauma-informed design (8/8)

23. ✅ **Progress can only grow** — the garden never resets or wilts; no
    streaks, no loss mechanics.
24. ✅ **Missed days are never counted or mentioned** — coming back
    after time away greets warmly ("Your garden waited for you").
25. ✅ **The mascot is never disappointed** — Meni celebrates or wonders;
    the gentler answer path gets a curious tilt, equally warm words.
26. ✅ **Alarm styling is reserved** — red exists only inside
    scam-alert lessons; errors and feedback never use it.
27. ✅ **No shame language** — "wrong" answers get validation first
    ("It's tempting…", "We've all done it!").
28. ✅ **The audience is never labeled** — the work-and-rights pack is a
    facilitator choice; no screen names any audience.
29. ✅ **Being scammed is framed no-fault** — the recovery lesson
    (ev-11/wk-11) leads with "never your fault" and treats fast telling
    as strength.
30. ✅ **Safe hand-over of devices** — two-step erase with a 6-second
    auto-disarm, for re-gifted phones.

## D. Language and literacy (6/6)

31. ✅ **Fully bilingual English/Spanish** — all 35 lessons per language,
    every UI string, dates, and the garden's screen-reader text.
32. ✅ **Language chosen with one tap before any words are needed** —
    the first screen speaks both languages; progress survives switching
    (same lesson ids).
33. ✅ **Respectful native register** — usted throughout, reviewed
    line-by-line; calques and one grammar slip fixed; "horas con Meni"
    replaces the doctor-connoting "horas de consulta".
34. ✅ **~5th-grade reading level** — short sentences, no jargon, checked
    per lesson.
35. ✅ **Read-aloud on every lesson** — for low literacy and low vision.
36. ✅ **Speech never mixes languages** — localized glue words ("Sus
    opciones son…"), Spanish voice for Spanish text (es-US).

## E. Scam protection (8/8)

37. ✅ **The gift-card rule** — one absolute, memorizable heuristic with
    a refusal script (ev-3).
38. ✅ **AI voice cloning and deepfake video calls** — hang up, call the
    number you know; family code word (ev-4).
39. ✅ **The grandparent scam with a realistic trap** — the distractor
    is "text back and ask first" (what careful people actually do),
    not a strawman (ev-1).
40. ✅ **Prize/fee scams** — "winners never pay first" (ev-8).
41. ✅ **Job scams** — real jobs never charge you (wk-8).
42. ✅ **Romance/companion scams** — the online-sweetheart rule, with
    loneliness validated, never shamed (ev-12).
43. ✅ **After a scam: recovery and reporting** — AARP fraud helpline
    1-877-908-3360 (Spanish support) / reportfraud.ftc.gov, framed
    no-fault (ev-11/wk-11).
44. ✅ **Data privacy of AI apps** — what you type may be stored; keep
    passwords, SSN, and whole documents out (core-8).

## F. Technology and delivery (10/10)

45. ✅ **Web, not app store** — installable PWA ("Add to Home Screen"),
    the right call for donated phones and no-account users; works
    offline after first load (`sw.js`, cache-first).
46. ✅ **Zero data collection** — no accounts, no servers, no analytics;
    progress lives in `localStorage` only. Nothing to breach, nothing
    to subpoena.
47. ✅ **Runs on old phones** — no framework, no build step, ~220 KB
    total including fonts; also builds to a single HTML file
    (`tools/build-single.mjs`) for single-file hosts and hand-offs.
48. ✅ **Human voice first** — recordings in `audio/<lang>/` always beat
    synthesis; a recording booth (`tools/record-audio.html`) walks a
    human reader through every line in both languages.
49. ✅ **Never the robotic default voice** — installed voices are scored
    (natural/enhanced/neural preferred, low-quality engines shunned) and
    the facilitator can audition and pick one in setup.
50. ✅ **Quality gates in the repo** — `tools/check-lessons.mjs` (70
    lessons, both-language parity, finale position) and `tools/smoke.mjs`
    (full browser walk of both language journeys, focus checks, the
    facilitator language switch). Both pass as of this commit.

**Checklist score: 50 / 50 criteria met — verified in code and in a real
browser.**

## Beyond the checklist — the three things only humans can add

The build meets every criterion a product can meet by itself. A perfect
*program* needs three more things no code can supply:

1. **A human voice.** The pipeline is ready; the app still speaks with
   the phone's best synthetic voice until someone (ideally a voice the
   learners will meet at office hours) records the lines in
   `tools/record-audio.html`. Start with the 12 core lessons — one quiet
   hour per language.
2. **Co-design with real learners.** Name, colors, mascot, and lesson
   examples should be preference-tested with actual participants; their
   corrections outrank every reviewer, including ours.
3. **A permanent home.** Import the repo at vercel.com (2 minutes,
   no build settings) or enable GitHub Pages, so learners have one
   stable URL to install from.
