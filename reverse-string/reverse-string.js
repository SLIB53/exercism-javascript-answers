export const reverseString = string =>
  Array.from({ length: string.length }, (_, i) =>
    string.charAt(string.length - 1 - i)
  ).join("");
