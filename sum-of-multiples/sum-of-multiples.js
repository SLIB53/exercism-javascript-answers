// const sumOfMultiples_functional = (multiples, number) =>
//   Array.from({ length: number }, (_, i) => i)
//     .filter(candidate => multiples.some(multiple => candidate % multiple === 0))
//     .reduce((sumAcc, n) => sumAcc + n, 0);

const sumOfMultiples_structured = (multiples, number) => {
  let sum = 0;

  for (let candidate = 0; candidate < number; candidate++) {
    if (multiples.some(multiple => candidate % multiple === 0))
      sum += candidate;
  }

  return sum;
}

export const sumOfMultiples = sumOfMultiples_structured;
