function translate(sequence, acc = []) {
  if (sequence) {
    const protein = (() => {
      if (sequence.startsWith('AUG')) return 'Methionine';

      if (sequence.startsWith('UUU')
        || sequence.startsWith('UUC')) return 'Phenylalanine';

      if (sequence.startsWith('UUA')
        || sequence.startsWith('UUG')) return 'Leucine';

      if (sequence.startsWith('UCU')
        || sequence.startsWith('UCC')
        || sequence.startsWith('UCA')
        || sequence.startsWith('UCG')) return 'Serine';

      if (sequence.startsWith('UAU')
        || sequence.startsWith('UAC')) return 'Tyrosine';

      if (sequence.startsWith('UGU')
        || sequence.startsWith('UGC')) return 'Cysteine';

      if (sequence.startsWith('UGG')) return 'Tryptophan';

      if (sequence.startsWith('UAA')
        || sequence.startsWith('UAG')
        || sequence.startsWith('UGA')) return null;

      throw new Error('Invalid codon');
    })();

    if (protein) {
      const sequenceRem = sequence.substr(3);
      const newAcc = acc.concat([protein]);
      return translate(sequenceRem, newAcc);
    } return translate(null, acc);
  } return acc;
}

export default translate;
