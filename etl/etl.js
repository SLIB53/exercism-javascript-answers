export const transform = previous => {
  let newBuffer = {};

  for (const [previousKey, previousValues] of Object.entries(previous)) {
    previousValues.forEach(previousValue => {
      const newKey = previousValue.toLowerCase();
      newBuffer[newKey] = Number(previousKey);
    });
  }

  return newBuffer;
};
