function* elementIterator(element) {
  for (let cur = element; cur !== null; cur = cur.next) {
    yield cur;
  }
}

export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(values = []) {
    this.head = null;

    values.forEach(v => {
      this.add(new Element(v));
    });
  }

  get length() {
    return this.elements().length;
  }

  elements() {
    return this.head ? [...elementIterator(this.head)] : [];
  }

  values() {
    return this.elements().map(el => el.value);
  }

  add(element) {
    if (this.head) {
      element.next = this.head;
      this.head = element;
    } else {
      this.head = element;
    }
  }

  reverse() {
    return new List(this.values());
  }

  toArray() {
    return this.values();    
  }
}
