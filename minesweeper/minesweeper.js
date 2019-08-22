const isValidCoordinate = (input, [row, column]) =>
  row >= 0 && row < input.length && (column >= 0 && column < input[row].length);

const hasMineAt = (input, [row, column]) => input[row].charAt(column) === "*";

const gatherScoreAt = (input, [row, column]) => {
  let score = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const adjacent = [row + i, column + j];
      if (isValidCoordinate(input, adjacent) && hasMineAt(input, adjacent))
        score++;
    }
  }

  return score;
};

export const annotate = input =>
  Array.from({ length: input.length }, (_, rowIndex) =>
    Array.from({ length: input[rowIndex].length }, (_, columnIndex) =>
      hasMineAt(input, [rowIndex, columnIndex])
        ? "*"
        : gatherScoreAt(input, [rowIndex, columnIndex]).toString()
    )
      .join("")
      .replace(/0/g, " ")
  );
