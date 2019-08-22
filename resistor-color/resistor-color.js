export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

const COLORS_LOOKUP_TABLE = new Map(COLORS.map((color, i) => [color, i]));

export const colorCode = color => COLORS_LOOKUP_TABLE.get(color);
