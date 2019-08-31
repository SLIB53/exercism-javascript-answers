function* uuidGenerator(maxNumUuids) {
  let uuids = [];

  const lazyLoadAt = (map, index) => {
    if (map[index] === undefined) map[index] = index;
  };

  const getFisherYatesSwapIndex = (arrayLength, currentIndex) =>
    Math.floor((arrayLength - currentIndex) * Math.random() + currentIndex);

  for (let i = 0; i < maxNumUuids; i++) {
    const randomIndex = getFisherYatesSwapIndex(maxNumUuids, i);

    lazyLoadAt(uuids, i);
    lazyLoadAt(uuids, randomIndex);

    [uuids[i], uuids[randomIndex]] = [uuids[randomIndex], uuids[i]];

    yield uuids[i];
  }
}

class RobotUuidGenerator {
  constructor() {
    this.reset();
  }

  next() {
    const cur = this._uuidGenerator.next();

    if (cur.done) {
        throw new Error("No more available UUIDs");
    }

    return cur.value;
  }

  reset() {
    this._uuidGenerator = RobotUuidGenerator.createUuidGenerator();
  }

  static createUuidGenerator() {
    return uuidGenerator(26 * 26 * 10 * 10 * 10);
  }
}

const robotUuidGenerator = new RobotUuidGenerator();

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return Robot.formatUuid(this._uuid);
  }

  reset() {
    this._uuid = robotUuidGenerator.next();
  }

  static releaseNames() {
    robotUuidGenerator.reset();
  }

  static decodeUuid(uuid) {
    const l1 = Math.floor(uuid / 26000);
    const l2 = Math.floor((uuid - l1 * 26000) / 1000);
    const d1 = Math.floor((uuid - (l1 * 26000 + l2 * 1000)) / 100);
    const d2 = Math.floor((uuid - (l1 * 26000 + l2 * 1000 + d1 * 100)) / 10);
    const d3 = Math.floor(uuid - (l1 * 26000 + l2 * 1000 + d1 * 100 + 10 * d2));

    return [l1, l2, d1, d2, d3];
  }

  static formatUuid(uuid) {
    const [l1, l2, d1, d2, d3] = Robot.decodeUuid(uuid);

    const formatL = l => String.fromCharCode(65 + l);

    return `${formatL(l1)}${formatL(l2)}${d1}${d2}${d3}`;
  }
}
