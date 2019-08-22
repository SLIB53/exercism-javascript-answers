export class NucleotideCounts {
  /**
   * Count nucleotides in a DNA strand and generate
   * a serial of space separated counters (#A #C #G #T).
   *
   * @param {String} strand
   */
  static parse(strand) {
    let counters = { A: 0, C: 0, G: 0, T: 0 };

    for (let i = 0; i < strand.length; i++) {
      if (!(counters[strand.charAt(i)] += 1)) {
        throw "Invalid nucleotide in strand";
      }
    }

    return `${counters.A} ${counters.C} ${counters.G} ${counters.T}`;
  }
}
