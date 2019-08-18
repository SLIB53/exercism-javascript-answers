import crypto from 'crypto';

/**
 * Generate a secure random byte,
 * wrap within the range 0-25 inclusive,
 * add to ASCII 'a' (value of 97).
 *
 * Note that since this maps 256 values to 26 values,
 * and 256 is not evenly divisible by 26,
 * a few values will become slightly more common than others.
 */
const generateRandomLetter = () => String.fromCharCode(crypto.randomBytes(1)[0] % 26 + 97);

const generateRandomLetters = numLetters => Array.from({ length: numLetters }, generateRandomLetter);

const generateRandomKey = keyLength => generateRandomLetters(keyLength).join('');

const shiftDistanceFromKey = (key, i) => key.charCodeAt(i % key.length) - 97;

const encode = (key, message) => message
  .split('')
  .map((c, i) => {
    let alphabetIndex = c.charCodeAt(0) - 97 + shiftDistanceFromKey(key, i);
    alphabetIndex %= 26;
    return String.fromCharCode(97 + alphabetIndex);
  })
  .join('');

const decode = (key, message) => message
  .split('')
  .map((c, i) => {
    let reverseAlphabetIndex = 122 - c.charCodeAt(0) + shiftDistanceFromKey(key, i);
    reverseAlphabetIndex %= 26;
    return String.fromCharCode(122 - reverseAlphabetIndex);
  })
  .join('');

const isValidKey = candidate => typeof candidate === 'string'
  && candidate.trim() !== ''
  && candidate.split('').every(c => c >= 'a' && c <= 'z');

export class Cipher {
  constructor(key = generateRandomKey(100)) {
    if (!isValidKey(key)) {
      throw new Error('Bad key');
    }

    this.key = key;
  }

  encode(message) {
    return encode(this.key, message);
  }

  decode(message) {
    return decode(this.key, message);
  }
}
