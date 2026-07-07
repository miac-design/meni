/* Human recordings available to "Read it to me" — generated file.
   Run `node tools/build-audio-manifest.mjs` after adding recordings to
   audio/<lang>/ (see tools/record-audio.html for the recording booth).
   Keys are "<lang>/<lessonId>.<part>" where part is teach | ask | done.
   When a key exists, the recording plays; otherwise the phone's best
   installed voice reads the text. */

const AUDIO_FILES = {};
