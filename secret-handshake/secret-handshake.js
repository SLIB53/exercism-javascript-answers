export const secretHandshake = bin => {
  if (!Number.isInteger(bin)) throw new Error("Handshake must be a number");

  let expressions = [];

  if (bin & 0b00001) expressions.push("wink");
  if (bin & 0b00010) expressions.push("double blink");
  if (bin & 0b00100) expressions.push("close your eyes");
  if (bin & 0b01000) expressions.push("jump");

  if (bin & 0b10000) expressions = expressions.reverse();

  return expressions;
};
