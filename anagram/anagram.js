const hashWord = word =>
  word
    .toLowerCase()
    .split("")
    .sort()
    .join("");

export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(candidates) {
    const wordLowerCase = this.word.toLowerCase();
    const matchHash = hashWord(this.word);

    return candidates.filter(
      candidate =>
        wordLowerCase !== candidate.toLowerCase() &&
        matchHash === hashWord(candidate)
    );
  }
}
