export const compute = (string1, string2) => {
  if (string1.length !== string2.length) {
    if (string1 === '') throw new Error('left strand must not be empty');
    if (string2 === '') throw new Error('right strand must not be empty');
    throw new Error('left and right strands must be of equal length');
  }

  return [...string1]
    .map((c, i) => [c, string2.charAt(i)])
    .reduce((acc, [left, right]) => acc + (left !== right ? 1 : 0), 0);
}
