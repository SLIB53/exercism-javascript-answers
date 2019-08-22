const dnaToRnaTable = new Map([["G", "C"], ["C", "G"], ["T", "A"], ["A", "U"]]);

const dnaNucleotideToRna = dnaNucleotide => {
  const rnaNucleotideCandidate = dnaToRnaTable.get(dnaNucleotide);

  if (rnaNucleotideCandidate === undefined)
    throw new Error("Invalid input DNA.");

  return rnaNucleotideCandidate;
};

export const toRna = dnaSequence =>
  Array.from(dnaSequence, dnaNucleotideToRna).join("");
