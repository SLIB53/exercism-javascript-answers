export const isPangram = (sentence) => {
  let alphabetFlags = 0;

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i).toLowerCase();

    if (letter >= 'a' && letter <= 'z') {
      alphabetFlags |= 1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0));

      if (alphabetFlags == 0b11111111111111111111111111) {
        return true;
      }
    }
  }

  return false;
};
