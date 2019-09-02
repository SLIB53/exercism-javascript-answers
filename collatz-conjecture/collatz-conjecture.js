const steps_impl = (n, counter = 0) => {
  if (n === 1) {
    return counter;
  }

  return steps_impl(n % 2 === 0 ? n / 2 : 3 * n + 1, counter + 1);
}

export const steps = n => {
  if (!isFinite(n) || n <= 0) {
    throw "Only positive numbers are allowed";
  }

  return steps_impl(n);
};
