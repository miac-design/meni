/* Meni the bear — original illustrated character inspired by the vintage toy.
   Style: soft flat (no hard outlines) — modern mascot, not clip-art.
   Kept from the toy's DNA: warm orange body, pale round belly and muzzle,
   oversized navy eyes, the little red tuft on top, stubby seated pose.
   Meni is never angry, never sad, never disappointed — he celebrates,
   wonders, and welcomes.

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
    closedMouth = `<circle cx="${cx}" cy="${cy + 20 * s}" r="${2.8 * s}" fill="${c.line}" class="m-mouth-closed"/>`;
  } else if (expr === "delighted") {
    closedMouth = `<g class="m-mouth-closed">
      <path d="M${cx - 7 * s} ${cy + 17 * s} Q${cx} ${cy + 27 * s} ${cx + 7 * s} ${cy + 17 * s} Z" fill="${c.line}"/>
      <ellipse cx="${cx}" cy="${cy + 21.5 * s}" rx="${3.4 * s}" ry="${2 * s}" fill="${c.blush}"/>
    </g>`;
  } else {
    closedMouth = `<path d="M${cx} ${cy + 13.5 * s} v${3.5 * s} M${cx - 6 * s} ${cy + 18 * s} Q${cx} ${cy + 22.5 * s} ${cx + 6 * s} ${cy + 18 * s}" fill="none" stroke="${c.line}" stroke-width="${2.2 * s}" stroke-linecap="round" class="m-mouth-closed"/>`;
  }
  const openMouth = `<ellipse cx="${cx}" cy="${cy + 19.5 * s}" rx="${4.8 * s}" ry="${3.8 * s}" fill="${c.line}" class="m-mouth-open"/>`;

  const tilt = expr === "curious" ? ` transform="rotate(-6 ${cx} ${cy + 34 * s})"` : "";

  return `<g${tilt}>
    <circle cx="${cx - 33 * s}" cy="${cy - 36 * s}" r="${13.5 * s}" fill="${c.deep}"/>
    <circle cx="${cx + 33 * s}" cy="${cy - 36 * s}" r="${13.5 * s}" fill="${c.deep}"/>
    <circle cx="${cx - 33 * s}" cy="${cy - 36 * s}" r="${6.5 * s}" fill="${c.pale}"/>
    <circle cx="${cx + 33 * s}" cy="${cy - 36 * s}" r="${6.5 * s}" fill="${c.pale}"/>
    <ellipse cx="${cx + 1 * s}" cy="${cy - 42 * s}" rx="${4.2 * s}" ry="${6.5 * s}" fill="${c.red}" transform="rotate(9 ${cx} ${cy - 42 * s})"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${44 * s}" ry="${40 * s}" fill="${c.body}"/>
    <ellipse cx="${cx}" cy="${cy + 14 * s}" rx="${17 * s}" ry="${13 * s}" fill="${c.pale}"/>
    <circle cx="${cx - 29 * s}" cy="${cy + 10 * s}" r="${6 * s}" fill="${c.blush}" opacity="0.55"/>
    <circle cx="${cx + 29 * s}" cy="${cy + 10 * s}" r="${6 * s}" fill="${c.blush}" opacity="0.55"/>
    <g class="m-eyes">
      <ellipse cx="${cx - 16 * s}" cy="${cy - 5 * s}" rx="${7 * s}" ry="${8 * s}" fill="${c.eyes}"/>
      <ellipse cx="${cx + 16 * s}" cy="${cy - 5 * s}" rx="${7 * s}" ry="${8 * s}" fill="${c.eyes}"/>
      <circle cx="${cx - 13.5 * s}" cy="${cy - 8 * s}" r="${2.6 * s}" fill="${c.glint}"/>
      <circle cx="${cx + 18.5 * s}" cy="${cy - 8 * s}" r="${2.6 * s}" fill="${c.glint}"/>
      <circle cx="${cx - 18.5 * s}" cy="${cy - 2.5 * s}" r="${1.2 * s}" fill="${c.glint}" opacity="0.85"/>
      <circle cx="${cx + 13.5 * s}" cy="${cy - 2.5 * s}" r="${1.2 * s}" fill="${c.glint}" opacity="0.85"/>
    </g>
    <path d="M${cx - 5 * s} ${cy + 9 * s} Q${cx} ${cy + 6.5 * s} ${cx + 5 * s} ${cy + 9 * s} Q${cx + 5 * s} ${cy + 13.5 * s} ${cx} ${cy + 14.5 * s} Q${cx - 5 * s} ${cy + 13.5 * s} ${cx - 5 * s} ${cy + 9 * s} Z" fill="${c.red}"/>
    ${closedMouth}
    ${openMouth}
  </g>`;
}

function meniBody(waving) {
  const c = MENI_COLORS;
  const leftArm = `<ellipse cx="56" cy="142" rx="13" ry="27" transform="rotate(20 56 142)" fill="${c.deep}"/>`;
  /* The waving arm sits in a clean group so the CSS wave animation can
     rotate it without fighting an attribute transform. */
  const rightArm = waving
    ? `<g class="m-arm"><g>
         <ellipse cx="153" cy="113" rx="12.5" ry="27" transform="rotate(28 153 113)" fill="${c.deep}"/>
         <circle cx="164.5" cy="90.5" r="6.5" fill="${c.pale}"/>
       </g></g>`
    : `<ellipse cx="144" cy="142" rx="13" ry="27" transform="rotate(-20 144 142)" fill="${c.deep}"/>`;
  return `
    ${leftArm}
    ${rightArm}
    <ellipse cx="100" cy="152" rx="50" ry="48" fill="${c.body}"/>
    <ellipse cx="100" cy="162" rx="29" ry="27" fill="${c.pale}"/>
    <ellipse cx="63" cy="195" rx="20" ry="13" fill="${c.deep}"/>
    <ellipse cx="137" cy="195" rx="20" ry="13" fill="${c.deep}"/>
    <ellipse cx="63" cy="197" rx="10" ry="6.5" fill="${c.pale}"/>
    <ellipse cx="137" cy="197" rx="10" ry="6.5" fill="${c.pale}"/>
  `;
}

const MENI = {
  /* Head-only badge for the header and small sizes. */
  mark(expr = "smile") {
    return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniHead(60, 64, 1, expr)}
    </svg>`;
  },

  /* Seated pose, closest to the toy. Default character. */
  classic(expr = "smile") {
    return `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniBody(false)}
      ${meniHead(100, 64, 0.92, expr)}
    </svg>`;
  },

  /* Bare group for placing Meni inside another SVG scene (the garden).
     Draws at 200x230 design size, scaled and positioned by the caller. */
  group(pose, expr, scale, x, y) {
    return `<g transform="translate(${x} ${y}) scale(${scale})">
      ${meniBody(pose === "waving")}
      ${meniHead(100, 64, 0.92, expr)}
    </g>`;
  },

  /* One arm raised, for greetings and celebrations. */
  waving(expr = "smile") {
    return `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniBody(true)}
      ${meniHead(100, 64, 0.92, expr)}
    </svg>`;
  },
};
