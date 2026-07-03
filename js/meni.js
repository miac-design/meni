/* Meni the bear — original illustrated character inspired by the vintage toy.
   Style: soft flat (no hard outlines) — modern mascot, not clip-art.
   Kept from the toy's DNA: warm orange body, pale round belly and muzzle,
   oversized navy eyes, the little red tuft on top, stubby seated pose.
   Meni is never angry, never sad, never disappointed — he celebrates,
   wonders, and welcomes.

   Geometry notes (the 2026 tune-up): the head is nearly round and always
   overlaps the body so the two read as one bear, arms are drawn in front
   of the body with pale paw pads, and the waving arm attaches at the
   shoulder — the CSS wave pivots there (transform-origin 30% 88% of the
   .m-arm group's box).

   Expressions: "smile" (default), "delighted" (open happy mouth with
   tongue), "curious" (head tilt + little round mouth).

   Animation hooks (all driven by CSS, all off under reduced motion):
   - .m-eyes    blinks every few seconds
   - .m-mouth-closed / .m-mouth-open   swap while a .meni-holder
                ancestor has the "talking" class (Read it to me)
   - .m-arm     gentle wave on the waving pose */

const MENI_COLORS = {
  body: "#E8872B",
  deep: "#DC7717", // limbs and ears: one tone deeper so flat shapes read
  pale: "#F6C08A",
  blush: "#F49B6A",
  line: "#6B3E14",
  eyes: "#1B2036",
  red: "#D6452B",
  glint: "#FFFFFF",
};

function meniHead(cx, cy, s, expr = "smile") {
  const c = MENI_COLORS;

  let closedMouth;
  if (expr === "curious") {
    closedMouth = `<circle cx="${cx}" cy="${cy + 19 * s}" r="${2.9 * s}" fill="${c.line}" class="m-mouth-closed"/>`;
  } else if (expr === "delighted") {
    closedMouth = `<g class="m-mouth-closed">
      <path d="M${cx - 7.5 * s} ${cy + 16.5 * s} Q${cx} ${cy + 26.5 * s} ${cx + 7.5 * s} ${cy + 16.5 * s} Z" fill="${c.line}"/>
      <ellipse cx="${cx}" cy="${cy + 21 * s}" rx="${3.6 * s}" ry="${2.1 * s}" fill="${c.blush}"/>
    </g>`;
  } else {
    closedMouth = `<path d="M${cx} ${cy + 13 * s} v${3 * s} M${cx - 6.5 * s} ${cy + 17 * s} Q${cx} ${cy + 21.5 * s} ${cx + 6.5 * s} ${cy + 17 * s}" fill="none" stroke="${c.line}" stroke-width="${2.2 * s}" stroke-linecap="round" class="m-mouth-closed"/>`;
  }
  const openMouth = `<ellipse cx="${cx}" cy="${cy + 18.5 * s}" rx="${4.8 * s}" ry="${3.8 * s}" fill="${c.line}" class="m-mouth-open"/>`;

  const tilt = expr === "curious" ? ` transform="rotate(-6 ${cx} ${cy + 34 * s})"` : "";

  return `<g${tilt}>
    <circle cx="${cx - 29 * s}" cy="${cy - 30 * s}" r="${14 * s}" fill="${c.deep}"/>
    <circle cx="${cx + 29 * s}" cy="${cy - 30 * s}" r="${14 * s}" fill="${c.deep}"/>
    <circle cx="${cx - 29 * s}" cy="${cy - 30 * s}" r="${7 * s}" fill="${c.pale}"/>
    <circle cx="${cx + 29 * s}" cy="${cy - 30 * s}" r="${7 * s}" fill="${c.pale}"/>
    <ellipse cx="${cx - 2 * s}" cy="${cy - 42 * s}" rx="${3.4 * s}" ry="${6 * s}" fill="${c.red}" transform="rotate(-16 ${cx - 2 * s} ${cy - 42 * s})"/>
    <ellipse cx="${cx + 4 * s}" cy="${cy - 42.5 * s}" rx="${3 * s}" ry="${5.4 * s}" fill="${c.red}" transform="rotate(14 ${cx + 4 * s} ${cy - 42.5 * s})"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${41 * s}" ry="${39 * s}" fill="${c.body}"/>
    <ellipse cx="${cx}" cy="${cy + 13 * s}" rx="${16.5 * s}" ry="${12 * s}" fill="${c.pale}"/>
    <circle cx="${cx - 27 * s}" cy="${cy + 9 * s}" r="${5.8 * s}" fill="${c.blush}" opacity="0.5"/>
    <circle cx="${cx + 27 * s}" cy="${cy + 9 * s}" r="${5.8 * s}" fill="${c.blush}" opacity="0.5"/>
    <g class="m-eyes">
      <ellipse cx="${cx - 15.5 * s}" cy="${cy - 4 * s}" rx="${7.6 * s}" ry="${8.6 * s}" fill="${c.eyes}"/>
      <ellipse cx="${cx + 15.5 * s}" cy="${cy - 4 * s}" rx="${7.6 * s}" ry="${8.6 * s}" fill="${c.eyes}"/>
      <circle cx="${cx - 13 * s}" cy="${cy - 7 * s}" r="${2.9 * s}" fill="${c.glint}"/>
      <circle cx="${cx + 18 * s}" cy="${cy - 7 * s}" r="${2.9 * s}" fill="${c.glint}"/>
      <circle cx="${cx - 18 * s}" cy="${cy - 1.5 * s}" r="${1.3 * s}" fill="${c.glint}" opacity="0.85"/>
      <circle cx="${cx + 13 * s}" cy="${cy - 1.5 * s}" r="${1.3 * s}" fill="${c.glint}" opacity="0.85"/>
    </g>
    <path d="M${cx - 5 * s} ${cy + 8.5 * s} Q${cx} ${cy + 6 * s} ${cx + 5 * s} ${cy + 8.5 * s} Q${cx + 5 * s} ${cy + 13 * s} ${cx} ${cy + 14 * s} Q${cx - 5 * s} ${cy + 13 * s} ${cx - 5 * s} ${cy + 8.5 * s} Z" fill="${c.red}"/>
    ${closedMouth}
    ${openMouth}
  </g>`;
}

function meniBody(waving) {
  const c = MENI_COLORS;
  /* Arms are drawn in front of the body, resting toward the belly,
     each ending in a pale paw pad. */
  const leftArm = `
    <ellipse cx="62" cy="137" rx="12" ry="22" transform="rotate(24 62 137)" fill="${c.deep}"/>
    <circle cx="55" cy="155" r="6.8" fill="${c.pale}"/>`;
  /* The waving arm sits in a clean group so the CSS wave animation can
     rotate it around the shoulder without fighting an attribute
     transform. It overlaps the body at (137, 130). */
  const rightArm = waving
    ? `<g class="m-arm"><g>
         <ellipse cx="150" cy="108" rx="12.5" ry="27" transform="rotate(32 150 108)" fill="${c.deep}"/>
         <circle cx="162" cy="88" r="7" fill="${c.pale}"/>
       </g></g>`
    : `
    <ellipse cx="138" cy="137" rx="12" ry="22" transform="rotate(-24 138 137)" fill="${c.deep}"/>
    <circle cx="145" cy="155" r="6.8" fill="${c.pale}"/>`;
  return `
    <ellipse cx="64" cy="196" rx="19" ry="12.5" fill="${c.deep}"/>
    <ellipse cx="136" cy="196" rx="19" ry="12.5" fill="${c.deep}"/>
    <ellipse cx="100" cy="148" rx="49" ry="47" fill="${c.body}"/>
    <ellipse cx="100" cy="160" rx="28" ry="26" fill="${c.pale}"/>
    <ellipse cx="64" cy="198" rx="9.5" ry="6" fill="${c.pale}"/>
    <ellipse cx="136" cy="198" rx="9.5" ry="6" fill="${c.pale}"/>
    ${leftArm}
    ${rightArm}
  `;
}

const MENI = {
  /* Head-only badge for the header and small sizes. */
  mark(expr = "smile") {
    return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniHead(60, 64, 1, expr)}
    </svg>`;
  },

  /* Seated pose, closest to the toy. Default character. The head is
     drawn last so it overlaps the body — one bear, no gap. */
  classic(expr = "smile") {
    return `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniBody(false)}
      ${meniHead(100, 70, 0.92, expr)}
    </svg>`;
  },

  /* Bare group for placing Meni inside another SVG scene (the garden).
     Draws at 200x230 design size, scaled and positioned by the caller. */
  group(pose, expr, scale, x, y) {
    return `<g transform="translate(${x} ${y}) scale(${scale})">
      ${meniBody(pose === "waving")}
      ${meniHead(100, 70, 0.92, expr)}
    </g>`;
  },

  /* One arm raised, for greetings and celebrations. */
  waving(expr = "smile") {
    return `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniBody(true)}
      ${meniHead(100, 70, 0.92, expr)}
    </svg>`;
  },
};
