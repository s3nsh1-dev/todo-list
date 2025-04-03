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
  "Plan your week with clear objectives and ignite your progress. You can easily add, update, remove, and change the status of your weekly goals. Embrace each week as a fresh start to achieve more and shine brightly.";

export const monthlyContent =
  "Chart your monthly targets and take confident steps toward success. With options to add, update, remove, and adjust your goals, every month offers a new opportunity for growth. May your journey bring you closer to your dreams!";

export const yearlyContent =
  "Set your yearly resolution and let your ambitions soar. Here, you can add, update, remove, and toggle the status of your goals. No matter the challenge, we wish you a prosperous year that unlocks your full potential. Best of luck!";
