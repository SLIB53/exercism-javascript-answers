export class NucleotideCounts {
  /**
   * Count nucleotides in a DNA strand and generate
   * a serial of space separated counters (#A #C #G #T).
   *
   * @param {String} strand
   */
  static parse(strand) {
    let counters = { A: 0, C: 0, G: 0, T: 0 };

    strand.split("").forEach(nucleotide => {
      if (!(counters[nucleotide] += 1)) {
        throw "Invalid nucleotide in strand";
      }
    });

    return `${counters.A} ${counters.C} ${counters.G} ${counters.T}`;
  }
}
