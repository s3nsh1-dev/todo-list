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
