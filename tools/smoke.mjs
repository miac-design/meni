/* End-to-end browser test: walks the whole first-run flow in Spanish and
   English (language → size → flower → lesson → garden) plus a facilitator
   language-switch, asserting focus management and answer-button equality.
   Run: serve the app on :8901 (python3 -m http.server 8901) and
   `node tools/smoke.mjs` (needs playwright-core + a Chromium binary;
   set executablePath below if yours differs). */
import { chromium } from "playwright-core";

const URL = "http://localhost:8901/";
const fails = [];
const ok = (name, cond) => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${name}`);
  if (!cond) fails.push(name);
};

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

async function firstRun(lang, expects) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto(URL);

  // Screen 0: language
  ok(`${lang}: language screen shows both greetings`, await page.getByText("¡Hola! Soy Meni.").isVisible());
  await page.getByRole("button", { name: lang === "es" ? "Español" : "English", exact: true }).click();

  // Screen 1: text size
  ok(`${lang}: size prompt`, await page.getByText(expects.sizePrompt).isVisible());
  ok(`${lang}: html lang set`, (await page.evaluate(() => document.documentElement.lang)) === lang);
  await page.getByRole("button", { name: expects.sizeAA, exact: true }).click();
  await page.getByRole("button", { name: expects.sizeConfirm }).click();

  // Screen 1b: favorite flower
  ok(`${lang}: flower chooser`, await page.getByText(expects.favTitle).isVisible());
  ok(`${lang}: focus moved to heading`, await page.evaluate(() => document.activeElement.tagName === "H1"));
  await page.getByRole("button", { name: expects.favFlower }).click();

  // Lesson 1, step 1
  ok(`${lang}: lesson 1 title`, await page.getByRole("heading", { name: expects.lesson1 }).isVisible());
  ok(`${lang}: day 1 eyebrow`, await page.getByText(expects.day1).isVisible());
  await page.getByRole("button", { name: expects.next, exact: true }).click();

  // Step 2: question → answer
  ok(`${lang}: lesson 1 question`, await page.getByText(expects.question1).isVisible());
  ok(`${lang}: two equal answer buttons`, (await page.locator("#answers .btn-choice").count()) === 2);
  await page.getByRole("button", { name: expects.answer1, exact: true }).click();

  // Step 3: warm response + new flower
  ok(`${lang}: response bubble`, await page.getByText(expects.response1).isVisible());
  ok(`${lang}: new flower caption`, await page.getByText(expects.newFlower).isVisible());
  await page.getByRole("button", { name: expects.seeGarden }).click();

  // Garden
  ok(`${lang}: garden heading`, await page.getByRole("heading", { name: expects.garden }).isVisible());
  ok(`${lang}: 1 lesson learned`, await page.getByText(expects.learned).isVisible());
  ok(`${lang}: done-today message`, await page.getByText(expects.doneToday).isVisible());
  ok(`${lang}: garden svg aria`, await page.locator(`svg[aria-label*="${expects.ariaBit}"]`).count() > 0);

  await ctx.close();
}

await firstRun("es", {
  sizePrompt: "¿Puede leer esto con comodidad?",
  sizeAA: "AA Grande",
  sizeConfirm: "Este tamaño está bien",
  favTitle: "¿Cuál flor le gusta más?",
  favFlower: "Rosada",
  lesson1: "La IA ya está en su vida",
  day1: "Día 1",
  next: "Siguiente",
  question1: "¿Ha usado Google alguna vez?",
  answer1: "Sí",
  response1: "¡Entonces ya ha usado la IA!",
  newFlower: "¡Una flor nueva para su jardín!",
  seeGarden: "Ver mi jardín",
  garden: "Su jardín",
  learned: "lección aprendida",
  doneToday: "Esa fue su lección de hoy",
  ariaBit: "Un jardín con 1 flores",
});

await firstRun("en", {
  sizePrompt: "Can you read this comfortably?",
  sizeAA: "AA Large",
  sizeConfirm: "This size is good",
  favTitle: "Which flower do you like best?",
  favFlower: "Blue",
  lesson1: "AI is already in your life",
  day1: "Day 1",
  next: "Next",
  question1: "Have you ever used Google?",
  answer1: "Yes",
  response1: "already used AI!",
  newFlower: "A new flower for your garden!",
  seeGarden: "See my garden",
  garden: "Your garden",
  learned: "lesson learned",
  doneToday: "your lesson for today",
  ariaBit: "A garden with 1 flowers",
});

// Facilitator setup: switch a mid-journey English phone to Spanish; progress must survive.
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto(URL);
  await page.evaluate(() => {
    localStorage.setItem("meni.v1", JSON.stringify({
      lang: "en", textScale: "AA", pack: "everyday", favAsked: true, favColor: null,
      completed: [{ id: "core-1", date: "2026-07-01" }, { id: "core-2", date: "2026-07-02" }],
      watered: [], saved: [], lastVisit: "2026-07-02", officeHoursDate: null, chime: true,
    }));
  });
  await page.goto("about:blank");
  await page.goto(URL + "#setup");
  await page.getByRole("button", { name: "Español" }).click();
  await page.getByRole("button", { name: "Done — back to Meni" }).click();
  ok("setup: switched phone continues in Spanish at lesson 3",
    await page.getByRole("heading", { name: "Cómo hacer una buena pregunta" }).isVisible());
  const count = await page.evaluate(() => JSON.parse(localStorage.getItem("meni.v1")).completed.length);
  ok("setup: progress survived the language switch", count === 2);
  await ctx.close();
}

await browser.close();
console.log(fails.length ? `\n${fails.length} FAILURE(S)` : "\nALL CHECKS PASSED");
process.exit(fails.length ? 1 : 0);
