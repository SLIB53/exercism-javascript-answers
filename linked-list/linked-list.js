function* nodeIterator(startNode) {
  for (let cur = startNode; cur != null; cur = cur.nextNode) {
    yield cur;
  }
}

function* untilNodeIterator(startNode, condition = () => {}) {
  for (const cur of nodeIterator(startNode)) {
    if (condition(cur)) {
      yield cur;
      return;
    }

    yield cur;
  }

  yield null;
}

class Node {
  constructor(contents, previousNode, nextNode) {
    this.contents = contents;
    this.previousNode = previousNode;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(contents) {
    const oldTail = this.tail;
    const newTail = new Node(contents, this.tail, null);

    if (oldTail !== null) {
      oldTail.nextNode = newTail;
    }

    this.tail = newTail;

    if (this.head === null) {
      this.head = newTail;
    }
  }

  pop() {
    const oldTail = this.tail;
    const newTail = oldTail ? oldTail.previousNode : null;

    if (newTail !== null) {
      newTail.nextNode = null;
    }

    this.tail = newTail;

    if (this.head === oldTail) {
      this.head = null;
    }

    return oldTail ? oldTail.contents : null;
  }

  shift() {
    const oldHead = this.head;
    const newHead = oldHead ? oldHead.nextNode : null;

    if (newHead !== null) {
      newHead.previousNode = null;
    }

    this.head = newHead;

    if (this.tail === oldHead) {
      this.tail = null;
    }

    return oldHead ? oldHead.contents : null;
  }

  unshift(contents) {
    const oldHead = this.head;
    const newHead = new Node(contents, null, this.tail);

    if (oldHead !== null) {
      oldHead.previousNode = newHead;
    }

    this.head = newHead;

    if (this.tail === null) {
      this.tail = newHead;
    }
  }

  delete(targetContents) {
    const dissolveNode = targetNode => {
      if (!targetNode) return;

      const headSide = targetNode.previousNode;
      const tailSide = targetNode.nextNode;

      if (this.head === targetNode) {
        this.head = this.head.nextNode;
      }

      if (this.tail === targetNode) {
        this.tail = this.tail.previousNode;
      }

      if (headSide !== null) headSide.nextNode = tailSide;
      if (tailSide !== null) tailSide.previousNode = headSide;
    };

    const terminal = [
      ...untilNodeIterator(this.head, n => n.contents === targetContents)
    ].slice(-1)[0];

    if (terminal) {
      dissolveNode(terminal);
    }
  }

  count() {
    return this.toList().length;
  }

  toList() {
    return [...nodeIterator(this.head)];
  }
}
