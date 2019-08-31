const parseLetters = str => {
  const strLetters = str.match(/[A-Z]|[a-z]/g);

  return strLetters !== null ? strLetters : [];
}

export const isIsogram = str => {
  const strLetters = parseLetters(str);

  return strLetters.length === new Set(strLetters.map(l => l.toLowerCase())).size;
};
