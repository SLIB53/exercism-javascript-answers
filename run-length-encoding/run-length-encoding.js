class Encoding {
  constructor(char, runLength) {
    this.char = char;
    this.runLength = runLength;
  }
}

const shrinkToEncodings = str => {
  const buf = [];

  for (let i = 0, char = str.charAt(0), runLength = 0; i < str.length; i += 1) {
    const createLocalEnc = () => new Encoding(char, runLength);

    const cur = str.charAt(i);

    if (str.charAt(i) !== char) {
      buf.push(createLocalEnc());
      char = cur;
      runLength = 1;
    } else {
      char = cur;
      runLength += 1;
    }

    if (i === str.length - 1) buf.push(createLocalEnc());
  }

  return buf;
};

const expandToEncodings = str => {
  const matchEncodingRegex = /\d+.|./g;

  const splitEncodingStrings = () => {
    const buf = [];
    let matchTmp;

    do {
      matchTmp = matchEncodingRegex.exec(str);

      if (matchTmp) {
        const m = matchTmp[0];
        if (m) buf.push(m);
      }
    } while (matchTmp);

    return buf;
  };

  return splitEncodingStrings().map(encStr => {
    const digitsPart = /\d+/g.exec(encStr);
    const charPart = /\D+/g.exec(encStr);

    const char = charPart[0];
    const runLength = (() => {
      const p = Number(digitsPart);
      return p >= 2 ? p : 1;
    })();

    return new Encoding(char, runLength);
  });
};

const toEncodedString = encodings => {
  return encodings
    .map(enc => (enc.runLength > 1 ? enc.runLength : "") + enc.char)
    .join("");
};

const toDecodedString = encodings => {
  return encodings.map(enc => enc.char.repeat(enc.runLength)).join("");
};

export const encode = string => toEncodedString(shrinkToEncodings(string));

export const decode = string => toDecodedString(expandToEncodings(string));
