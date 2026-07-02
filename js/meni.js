/* Meni the bear — original illustrated character inspired by the vintage toy.
   Design DNA: wide-set oversized navy eyes, red head tuft, pale belly and
   muzzle, stubby seated pose, warm orange body, dark brown line work.

   Poses: mark (head badge), classic (seated), waving (one arm up).
   Expressions: "smile" (default), "delighted" (open happy mouth),
   "curious" (head tilt + little round mouth). Meni is never angry,
   never sad, never disappointed — he celebrates, wonders, and welcomes.

   Animation hooks (all driven by CSS, all off under reduced motion):
   - .m-eyes    blinks every few seconds
   - .m-mouth-closed / .m-mouth-open   swap while a .meni-holder
                ancestor has the "talking" class (Read it to me)
   - .m-arm     gentle wave on the waving pose */

const MENI_COLORS = {
  body: "#E8872B",
  pale: "#F6C08A",
  line: "#6B3E14",
  eyes: "#1B2036",
  red: "#D6452B",
  glint: "#FFF9F2",
};

function meniHead(cx, cy, s, expr = "smile") {
  const c = MENI_COLORS;

  let closedMouth;
  if (expr === "curious") {
    closedMouth = `<circle cx="${cx}" cy="${cy + 21.5 * s}" r="${3 * s}" fill="${c.line}" class="m-mouth-closed"/>`;
  } else if (expr === "delighted") {
    closedMouth = `<path d="M${cx - 8 * s} ${cy + 19 * s} Q${cx} ${cy + 30 * s} ${cx + 8 * s} ${cy + 19 * s} Z" fill="${c.line}" class="m-mouth-closed"/>`;
  } else {
    closedMouth = `<path d="M${cx - 7 * s} ${cy + 21 * s} Q${cx} ${cy + 26 * s} ${cx + 7 * s} ${cy + 21 * s}" fill="none" stroke="${c.line}" stroke-width="${2.5 * s}" stroke-linecap="round" class="m-mouth-closed"/>`;
  }
  const openMouth = `<ellipse cx="${cx}" cy="${cy + 22 * s}" rx="${5.5 * s}" ry="${4.5 * s}" fill="${c.line}" class="m-mouth-open"/>`;

  const tilt = expr === "curious" ? ` transform="rotate(-7 ${cx} ${cy + 34 * s})"` : "";

  return `<g${tilt}>
    <circle cx="${cx - 31 * s}" cy="${cy - 34 * s}" r="${15 * s}" fill="${c.body}" stroke="${c.line}" stroke-width="${3 * s}"/>
    <circle cx="${cx + 31 * s}" cy="${cy - 34 * s}" r="${15 * s}" fill="${c.body}" stroke="${c.line}" stroke-width="${3 * s}"/>
    <circle cx="${cx - 31 * s}" cy="${cy - 34 * s}" r="${7 * s}" fill="${c.pale}"/>
    <circle cx="${cx + 31 * s}" cy="${cy - 34 * s}" r="${7 * s}" fill="${c.pale}"/>
    <ellipse cx="${cx}" cy="${cy - 45 * s}" rx="${5.5 * s}" ry="${9 * s}" fill="${c.red}" stroke="${c.line}" stroke-width="${2.5 * s}"/>
    <circle cx="${cx}" cy="${cy}" r="${42 * s}" fill="${c.body}" stroke="${c.line}" stroke-width="${3 * s}"/>
    <ellipse cx="${cx}" cy="${cy + 15 * s}" rx="${19 * s}" ry="${14 * s}" fill="${c.pale}" stroke="${c.line}" stroke-width="${2.5 * s}"/>
    <g class="m-eyes">
      <circle cx="${cx - 18 * s}" cy="${cy - 7 * s}" r="${8 * s}" fill="${c.eyes}"/>
      <circle cx="${cx + 18 * s}" cy="${cy - 7 * s}" r="${8 * s}" fill="${c.eyes}"/>
      <circle cx="${cx - 15.5 * s}" cy="${cy - 9.5 * s}" r="${2.4 * s}" fill="${c.glint}"/>
      <circle cx="${cx + 20.5 * s}" cy="${cy - 9.5 * s}" r="${2.4 * s}" fill="${c.glint}"/>
    </g>
    <ellipse cx="${cx}" cy="${cy + 10 * s}" rx="${6 * s}" ry="${4.5 * s}" fill="${c.red}"/>
    ${closedMouth}
    ${openMouth}
  </g>`;
}

function meniBody(waving) {
  const c = MENI_COLORS;
  const leftArm = `<ellipse cx="55" cy="142" rx="14" ry="28" transform="rotate(20 55 142)" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>`;
  /* The waving arm sits in a clean group so the CSS wave animation can
     rotate it without fighting an attribute transform. */
  const rightArm = waving
    ? `<g class="m-arm"><g>
         <ellipse cx="154" cy="112" rx="13" ry="28" transform="rotate(28 154 112)" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>
         <circle cx="166" cy="89" r="7" fill="${c.pale}"/>
       </g></g>`
    : `<ellipse cx="145" cy="142" rx="14" ry="28" transform="rotate(-20 145 142)" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>`;
  return `
    ${leftArm}
    ${rightArm}
    <ellipse cx="100" cy="152" rx="52" ry="50" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>
    <ellipse cx="100" cy="162" rx="30" ry="28" fill="${c.pale}"/>
    <ellipse cx="62" cy="196" rx="21" ry="14" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>
    <ellipse cx="138" cy="196" rx="21" ry="14" fill="${c.body}" stroke="${c.line}" stroke-width="3"/>
    <ellipse cx="62" cy="198" rx="11" ry="7" fill="${c.pale}"/>
    <ellipse cx="138" cy="198" rx="11" ry="7" fill="${c.pale}"/>
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
      ${meniHead(100, 62, 1, expr)}
    </svg>`;
  },

  /* One arm raised, for greetings and celebrations. */
  waving(expr = "smile") {
    return `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      ${meniBody(true)}
      ${meniHead(100, 62, 1, expr)}
    </svg>`;
  },
};
