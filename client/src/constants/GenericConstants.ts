import { paletteType } from "./commonInterfaces";

export const hoverAnimation =
  "flex items-center justify-center transition-transform duration-200 hover:scale-105";

export const colorPalette: paletteType[] = [
  { id: "first", color: "text-blue-500" },
  { id: "second", color: "text-yellow-500" },
  { id: "third", color: "text-red-500" },
  { id: "fourth", color: "text-green-600" },
];

// Current Date and Day
export const date = new Date().toDateString().slice(4, 15).split(" ").join(".");
export const day = new Date().toDateString().slice(0, 3);
export const todayDate = `${day}, ${date}`;

export const weeklyContent =
  "📅 Weekly Planner — Organize, Prioritize, and Conquer! \nEvery week is a fresh chapter. Add 📝, update ✏️, delete ❌, and drag & drop 🔀 your weekly goals to stay on track. Monitor your progress through clear success ✅ and failure ❌ indicators. Powered by Express ⚡ and MongoDB 🍃 — plan smart, shine brighter.";

export const monthlyContent =
  "🗓️ Monthly Goals — Reflect, Plan, and Achieve! \nSet meaningful monthly goals that matter. Whether you're adding 📝 new objectives, updating ✏️ them, removing ❌ what no longer serves, or reordering 🔁 priorities — this feature has your back. With status tracking ✅❌ and a robust backend, success is only a plan away.";

export const yearlyContent =
  "📆 Yearly Vision — Dream Big, Stay Focused! \nMap out your resolutions and long-term goals for the year. Add 📝 new milestones, update ✏️ your aims, remove ❌ finished ones, and reorder 🔁 when priorities shift. With real-time progress tracking ✅❌ and full stack power ⚡🍃 behind the scenes, make this year count!";
