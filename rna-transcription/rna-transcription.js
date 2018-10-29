function dnaNucleotideToRna(dnaNucleotide) {
  let rnaNucleotideTemp;

  switch (dnaNucleotide) {
    case 'G':
      rnaNucleotideTemp = 'C';
      break;
    case 'C':
      rnaNucleotideTemp = 'G';
      break;
    case 'T':
      rnaNucleotideTemp = 'A';
      break;
    case 'A':
      rnaNucleotideTemp = 'U';
      break;
    default:
      throw new Error('Invalid input DNA.');
  }

  return rnaNucleotideTemp;
}

function toRna(dnaSequence) {
  return Array.from(dnaSequence).map(dnaNucleotideToRna).join('');
}

export { toRna };
