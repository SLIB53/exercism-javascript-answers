const bracketDefs = [
  { openChar: "[", closeChar: "]", bracketType: "square" },
  { openChar: "{", closeChar: "}", bracketType: "curly" },
  { openChar: "(", closeChar: ")", bracketType: "paren" }
];

const bracketDefsByOpenChar = bracketDefs.reduce((buffer, def) => {
  buffer[def.openChar] = def;
  return buffer;
}, {});

const bracketDefsByCloseChar = bracketDefs.reduce((buffer, def) => {
  buffer[def.closeChar] = def;
  return buffer;
}, {});

export const matchingBrackets = str => {
  let buffer = [];

  for (let c of str) {
    let defByOpenChar;
    let defByCloseChar;

    if ((defByOpenChar = bracketDefsByOpenChar[c])) {
      // is an open bracket
      buffer.push(defByOpenChar.bracketType);
    } else if ((defByCloseChar = bracketDefsByCloseChar[c])) {
      // is a closing bracket
      if (buffer[buffer.length - 1] === defByCloseChar.bracketType) {
        // closing bracket matches last bracket
        buffer.pop();
      } else {
        return false;
      }
    }
  }

  return buffer.length === 0;
};
