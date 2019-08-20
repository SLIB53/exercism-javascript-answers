const isInvalidFormatN = (n, nBase) =>
  n.length === 0 || // is empty array
  (n.length > 1 && n[0] === 0) || // has leading zeros
  n.some(digit => digit < 0) || // has a negative digit
  n.some(digit => digit >= nBase); // has a invalid digit per the base

const isInvalidBase = base => !Number.isInteger(base) || base <= 1;

const evaluateN = (n, nBase) =>
  n.reduce((sum, digit, i) => sum + digit * nBase ** (n.length - 1 - i), 0);

/**
 * @param {Array} n
 * @param {Number} nBase
 * @param {Number} resultBase
 */
export const convert = (n, nBase, resultBase) => {
  if (isInvalidBase(nBase)) throw new Error("Wrong input base");
  if (isInvalidBase(resultBase)) throw new Error("Wrong output base");
  if (isInvalidFormatN(n, nBase)) throw new Error("Input has wrong format");

  const nValue = evaluateN(n, nBase);

  let resultsBuffer = [];

  for (let order = 0; nValue / resultBase ** order >= 1; order++) {
    resultsBuffer.push(Math.floor(nValue / resultBase ** order) % resultBase);
  }

  const results = resultsBuffer.reverse();

  return results.length !== 0 ? results : [0];
};
