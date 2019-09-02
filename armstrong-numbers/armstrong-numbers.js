const truncateHigher = (integer, order) => {
  return integer % 10 ** (order + 1);
};

const floorFrom = (integer, order) => {
  return integer - truncateHigher(integer, order);
};

const numDigits = integer => {
  return Math.floor(Math.log10(integer)) + 1;
};

const parseDigitAt = (integer, order) => {
  const l = floorFrom(integer, order);
  const r = truncateHigher(integer, order - 1);
  const mask = l + r;

  return (integer - mask) / 10 ** order;
};

const parseDigits = integer => {
  const buf = [];
  for (let z = numDigits(integer) - 1; z >= 0; z -= 1) {
    buf.push(parseDigitAt(integer, z));
  }

  return buf;
};

export const validate = integer => {
  const sum = parseDigits(integer).reduce(
    (acc, int, _index, digits) => acc + int ** digits.length,
    0
  );

  return integer === sum;
};
