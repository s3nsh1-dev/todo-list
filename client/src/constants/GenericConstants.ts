import { paletteType } from "./commonInterfaces";

export const hoverAnimation =
  "flex items-center justify-center transition-transform duration-200 hover:scale-105";

export const colorPalette: paletteType[] = [
  { id: "first", color: "text-blue-500" },
  { id: "second", color: "text-yellow-500" },
  { id: "third", color: "text-red-500" },
  { id: "fourth", color: "text-green-600" },
];

const date = new Date().toDateString().slice(4, 15).split(" ").join(".");
const day = new Date().toDateString().slice(0, 3);
export const todayDate = `${day}, ${date}`;

export const weeklyContent =
  "Plan weekly priorities, maintain alignment, and monitor progress throughout the week. Keep active goals visible, update scope when needed, and close completed outcomes with confidence.";

export const monthlyContent =
  "Track monthly objectives with a broader view of execution. Use this module to sequence key initiatives, maintain momentum, and measure completion across the month.";

export const yearlyContent =
  "Define long-term objectives and manage strategic milestones over the year. Use this section to keep priorities organized, measurable, and consistently reviewed.";
