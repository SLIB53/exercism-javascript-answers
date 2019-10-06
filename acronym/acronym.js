export const parse = phrase =>
  phrase
    .match(/([a-z]|[A-Z]|')+/g)
    .map(word => word[0])
    .join("")
    .toUpperCase();
