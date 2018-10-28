class Encoding {
  constructor(char, runLength) {
    this.char = char;
    this.runLength = runLength;
  }
}

function shrinkToEncodings(str) {
  const buf = [];

  for (
    let i = 0,
      char = str.charAt(0),
      runLength = 0;
    i < str.length;
    i += 1
  ) {
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
}

function expandToEncodings(str) {
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

  return splitEncodingStrings(str).map((encStr) => {
    const digitsPart = /\d+/g.exec(encStr);
    const charPart = /\D+/g.exec(encStr);

    const char = charPart[0];
    const runLength = (() => {
      const p = Number(digitsPart);
      return p >= 2 ? p : 1;
    })();

    return new Encoding(char, runLength);
  });
}

function toEncodedString(encodings) {
  return encodings.map(enc => (enc.runLength > 1 ? enc.runLength : '') + enc.char)
    .join('');
}

function toDecodedString(encodings) {
  return encodings.map(enc => enc.char.repeat(enc.runLength))
    .join('');
}

const encode = string => toEncodedString(shrinkToEncodings(string));

const decode = string => toDecodedString(expandToEncodings(string));

export { encode, decode };
