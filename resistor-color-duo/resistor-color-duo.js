const resistorColorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export const value = ([resistorColor1, resistorColor2]) =>
  Number(
    `${resistorColorValues[resistorColor1]}${resistorColorValues[resistorColor2]}`
  );
