const abilityNames = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma"
];

const rollD6 = () => Math.ceil(Math.random() * 6);

export const abilityModifier = n => {
  if (n < 3) throw new Error("Ability scores must be at least 3");
  if (n > 18) throw new Error("Ability scores can be at most 18");

  return Math.floor((n - 10) / 2);
};

export class Character {
  static rollAbility() {
    return Array.from({ length: 4 }, rollD6)
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((acc, current) => acc + current, 0);
  }

  constructor() {
    abilityNames.forEach(key => (this[key] = Character.rollAbility()));
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
