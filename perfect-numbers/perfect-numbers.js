const NOT_NATURAL_NUMBER = new Error(
  "Classification is only possible for natural numbers."
);

const isNaturalNumber = number => number > 0;

function* factorsIterator(number) {
  for (let divisor = 1; divisor * 2 <= number; divisor += 1)
    if (number % divisor === 0) yield divisor;
}

const aliquotSum = number => {
  let sum = 0;

  for (let factor of factorsIterator(number)) {
    sum += factor;
  }

  return sum;
};

export const classify = number => {
  if (!isNaturalNumber(number)) throw NOT_NATURAL_NUMBER;

  if (number === 1) return "deficient";

  const s = aliquotSum(number);

  if (s < number) return "deficient";
  else if (s > number) return "abundant";
  else return "perfect";
};
