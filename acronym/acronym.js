export const parse = phrase =>
  phrase
    .toUpperCase()
    .match(/([A-Z]|')+/g)
    .map(word => word[0])
    .join("")
