export const transform = previous => {
  let nextBuffer = {};

  Object.entries(previous).forEach(([previousKey, previousValues]) =>
    previousValues.forEach(
      previousValue =>
        (nextBuffer[previousValue.toLowerCase()] = Number(previousKey))
    )
  );

  return nextBuffer;
};
