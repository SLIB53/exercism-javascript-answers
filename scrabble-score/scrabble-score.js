const scoreLookupTable = (() => {
  let buffer = new Map();

  ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].map(l => buffer.set(l, 1));
  ["d", "g"].map(l => buffer.set(l, 2));
  ["b", "c", "m", "p"].map(l => buffer.set(l, 3));
  ["f", "h", "v", "w", "y"].map(l => buffer.set(l, 4));
  buffer.set("k", 5);
  ["j", "x"].map(l => buffer.set(l, 8));
  ["q", "z"].map(l => buffer.set(l, 10));

  return buffer;
})();

/**
 * @param {string} word
 */
export const score = word =>
  [...word]
    .map(letter => scoreLookupTable.get(letter.toLowerCase()))
    .reduce((pointsOfLetter, pointsAcc) => pointsOfLetter + pointsAcc, 0);
