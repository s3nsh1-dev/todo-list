interface paletteType {
  id: string;
  color: string;
}

export const hoverAnimation =
  "flex items-center justify-center transition-transform duration-200 hover:scale-105";

export const colorPalette: paletteType[] = [
  { id: "first", color: "text-blue-500" },
  { id: "second", color: "text-yellow-500" },
  { id: "third", color: "text-red-500" },
  { id: "fourth", color: "text-green-600" },
];
