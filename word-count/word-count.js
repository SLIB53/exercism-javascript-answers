const mapToObject = map => {
  let targetObject = {};

  map.forEach((v, k) => {
    targetObject[k] = v;
  });

  return targetObject;
};

const wordCountMap = sentence =>
  sentence
    .toLowerCase()
    .match(/\S+/g)
    .reduce((counters, word) => {
      let wordCount = counters.get(word)
        ? counters.get(word)
        : 0;

      return counters.set(word, wordCount + 1);
    }, new Map());

export class Words {
  count(sentence) {
    return mapToObject(wordCountMap(sentence));
  }
}
