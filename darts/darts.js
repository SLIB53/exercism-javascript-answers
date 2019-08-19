export const solve = (x, y) => {
  const pos = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (pos <= 1) return 10;
  if (pos <= 5) return 5;
  if (pos <= 10) return 1;

  return 0;
};
