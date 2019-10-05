const bracketDefs = [
  { openChar: "[", closeChar: "]", bracketType: "square" },
  { openChar: "{", closeChar: "}", bracketType: "curly" },
  { openChar: "(", closeChar: ")", bracketType: "paren" }
];

const bracketDefsByOpenChar = (() => {
  let buffer = {};

  for (const def of bracketDefs) {
    buffer[def.openChar] = def;
  }

  return buffer;
})();

const bracketDefsByCloseChar = (() => {
  let buffer = {};

  for (const def of bracketDefs) {
    buffer[def.closeChar] = def;
  }

  return buffer;
})();

export const matchingBrackets = str => {
  let buffer = [];

  for (let c of str) {
    let defByOpenChar;
    let defByCloseChar;

    if ((defByOpenChar = bracketDefsByOpenChar[c])) {
      buffer.push(defByOpenChar.bracketType);
    } else if ((defByCloseChar = bracketDefsByCloseChar[c])) {
      if (buffer[buffer.length - 1] === defByCloseChar.bracketType)
        buffer.pop();
      else return false; // mismatching brace
    }
  }

  return !buffer.length;
};
