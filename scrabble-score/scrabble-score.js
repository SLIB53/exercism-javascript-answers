const scoreLookupTable = (() => {
  let m = new Map();

  ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].forEach(l => m.set(l, 1));
  ["d", "g"].forEach(l => m.set(l, 2));
  ["b", "c", "m", "p"].forEach(l => m.set(l, 3));
  ["f", "h", "v", "w", "y"].forEach(l => m.set(l, 4));
  m.set("k", 5);
  ["j", "x"].forEach(l => m.set(l, 8));
  ["q", "z"].forEach(l => m.set(l, 10));

  return m;
})();

/**
 * @param {string} word
 */
export const score = word =>
  Array.from(word, letter => scoreLookupTable.get(letter.toLowerCase())).reduce(
    (pointsAcc, pointsOfLetter) => pointsAcc + pointsOfLetter,
    0
  );
