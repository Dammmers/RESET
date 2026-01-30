const startDate = new Date("2026-01-30"); // Friday start
const today = new Date();

const dayIndex = Math.floor((today - startDate) / 86400000);
const week = Math.floor(dayIndex / 7) + 1;

document.getElementById("week").innerText = `Week ${week}`;

const schedules = {
  1: [
    "No porn. Masturbation allowed only if needed.",
    "Same rule. Move before bed.",
    "Skip today if you already released.",
    "No masturbation tonight.",
    "Allowed only if urge is strong.",
    "No masturbation.",
    "Allowed only if needed."
  ],
  2: [
    "No porn. Max twice this week.",
    "Delay urges 15 minutes.",
    "No masturbation.",
    "Only after effort.",
    "No masturbation.",
    "Allowed if necessary.",
    "Reflect briefly tonight."
  ],
  3: [
    "No porn. Aim 3–4 day gap.",
    "No masturbation.",
    "Move when urge hits.",
    "Allowed only if urge persists.",
    "No masturbation.",
    "Cold water + walk.",
    "No masturbation."
  ],
  4: [
    "Test abstinence.",
    "Move through urges.",
    "No masturbation.",
    "No masturbation.",
    "Reflect on changes.",
    "Optional release if needed.",
    "Reset calmly."
  ]
};

const currentWeek = schedules[week] || schedules[4];
const todayRule = currentWeek[dayIndex % 7];

document.getElementById("todayRule").innerText = todayRule;

function urgeProtocol() {
  alert(
    "Stand up.\nDrink water.\nChange rooms.\nMove 5–10 minutes.\nOne song max."
  );
}

function checkIn(success) {
  const log = {
    date: new Date().toDateString(),
    success
  };
  localStorage.setItem("lastLog", JSON.stringify(log));
  alert(success ? "Logged. Keep going." : "Logged. No spiral.");
}
