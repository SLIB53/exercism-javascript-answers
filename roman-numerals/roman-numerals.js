const parseDigit = (n, order) =>
  n >= Math.pow(10, order) ? Math.floor((n / Math.pow(10, order)) % 10) : 0;

function formatDigit(digit, remSymbol, fivesSymbol, greaterOrderSymbol) {
  const extractRem = d => d % 5;
  const formatRem = rem =>
    rem !== 4
      ? Array.from({ length: rem }, () => remSymbol).join("")
      : `${remSymbol}${fivesSymbol}`;

  const extractFives = d => (d >= 5 ? 1 : 0);
  const formatFives = fives => (fives ? fivesSymbol : "");

  const createRemString = () => formatRem(extractRem(digit));
  const createFivesString = () => formatFives(extractFives(digit));
  const createNineString = () => `${remSymbol}${greaterOrderSymbol}`;

  return digit !== 9
    ? `${createFivesString()}${createRemString()}`
    : createNineString();
}

export const toRoman = n => {
  const thousands = formatDigit(parseDigit(n, 3), "M", "", "");
  const hundreds = formatDigit(parseDigit(n, 2), "C", "D", "M");
  const tens = formatDigit(parseDigit(n, 1), "X", "L", "C");
  const ones = formatDigit(parseDigit(n, 0), "I", "V", "X");

  return `${thousands}${hundreds}${tens}${ones}`;
};
