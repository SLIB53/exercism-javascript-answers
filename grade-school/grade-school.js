const deepCopy = object => JSON.parse(JSON.stringify(object));

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    return deepCopy(this._roster);
  }

  add(name, gradeLevel) {
    if (this._roster[gradeLevel] === undefined) this._roster[gradeLevel] = [];

    this._roster[gradeLevel].push(name);
    this._roster[gradeLevel].sort();
  }

  grade(gradeLevel) {
    return this._roster[gradeLevel] ? deepCopy(this._roster[gradeLevel]) : [];
  }
}
