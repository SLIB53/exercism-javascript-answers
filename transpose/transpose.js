const normalizeStrings = strings =>
  strings.reduceRight(
    (acc, s) => {
      if (s.length > acc.level) acc.level = s.length;

      acc.paddedStrings.unshift(s.padEnd(acc.level));

      return acc;
    },
    {
      level: 0,
      paddedStrings: []
    }
  ).paddedStrings;

const transposeStrings = strings =>
  Array.from({ length: strings.length > 0 ? strings[0].length : 0 }, (_, i) =>
    strings.map(s => s.charAt(i)).join("")
  );

export const transpose = strings => transposeStrings(normalizeStrings(strings));
