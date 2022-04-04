function Node(val, next = null) {
  this.val = val || null;
  this.next = next;
}

Node.prototype.toString = function () {
  return `${this.val}, ${this.next}`;
};

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.pushAtHead = function (val) {
  const newNode = new Node(val);
  // if linked list is empty
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // 3 -> 2 -> 1
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;

    let current = oldHead;
    while (current.next) {
      current = current.next;
    }
    this.tail = current;
  }
  this.size++;
};

LinkedList.prototype.pushAtTail = function (val) {
  const newNode = new Node(val);
  // if linked list is empty
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // 1 -> 2 -> 3
    const oldTail = this.tail;
    oldTail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
};

// TODO: has to be test thoroughly
LinkedList.prototype.push = function (val) {
  const newNode = new Node(val);
  // if linked list is empty
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const oldTail = this.tail;
    oldTail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
};

LinkedList.prototype.pushAtNth = function (index, val) {
  if (index < 0 || index >= this.size) {
    return null;
  }

  const newNode = new Node(val);

  let current = this.head;
  for (let counter = 0; counter < index; counter++) {
    current = current.next;
  }

  // Insert 5 after 3rd node
  // 1 2 3 <<5>> 4
  const currentNext = current.next;
  current.next = newNode;
  newNode.next = currentNext;
  this.size++;
};

// 1 --> 2 --> 3 --> 4
// 0     1     1     2
LinkedList.prototype.itemAt = function (index) {
  if (index < 0 || index >= this.size) {
    return null;
  }

  let current = this.head;
  for (let counter = 0; counter < index; counter++) {
    current = current.next;
  }
  return current.val;
};

LinkedList.prototype.removeByIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return null;
  }

  let current = this.head;

  if (index === 0) {
    this.head = current.next;
  } else {
    let prev = null;
    let counter = 0;

    while (counter < index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
  }

  this.size--;
  return current.val;
};

LinkedList.prototype.removeAtHead = function () {
  // 3 cases
  // (1) empty list
  if (this.isEmpty()) {
    return false;
  }

  // (2) 1 node list
  if (this.head && this.head.next === null) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return true;
  }

  // (3) > 1 node list
  // 1 -> 2 -> 3
  this.head = this.head.next;
  this.size--;
  return true;
};

LinkedList.prototype.removeAtTail = function () {
  // 3 cases
  // (1) empty list
  if (this.isEmpty()) {
    return false;
  }

  // (2) 1 node list
  if (this.head && this.head.next === null) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return true;
  }

  // (3) > 1 node list
  let current = this.head;
  let prev = null;
  // 1 -> 2 -> 3 -> 4 -> (5)
  // 1 -> 2 -> 3 -> (4)
  while (current.next !== null) {
    prev = current;
    current = current.next;
  }
  this.tail = prev;
  this.size--;
  return true;
};

LinkedList.prototype.removeByValue = function (val) {
  if (this.isEmpty()) {
    return false;
  }

  let current = this.head;

  if (current.val === val) {
    this.head = current.next;
    this.size--;
    return true;
  }

  // 1 -> 2 -> 3 -> (4) -> 5
  while (current.next !== null) {
    if (current.next.val == val) {
      current.next = current.next.next;
      this.size--;
      return true;
    }
    current = current.next;
  }

  return false;
};

LinkedList.prototype.reverse = function () {
  // 3 cases
  // (1) empty list
  // (2) 1 node list
  if (this.isEmpty() || (this.head && this.head.next === null)) {
    return this;
  }

  // (3) > 1 node list
  let prev = null;
  let current = this.head;
  let next = null;

  while (current) {
    // save next node
    next = current.next;
    // link next to previous
    current.next = prev;
    // move 1 step forward
    prev = current;
    current = next;
  }
  this.tail = this.head;
  this.head = prev;
  return this;
};

/**
 * check if the linked list has loop or not
 * @returns ture if the linked list has loop, false otherwise
 */
LinkedList.prototype.hasCycle = function () {
  // Floyd’s Cycle-Finding Algorithm
  // 3 cases
  // (1) empty list
  // (2) 1 node list
  if (this.isEmpty() || (this.head && this.head.next === null)) {
    return false;
  }

  // (3) > 1 node list
  let fast = this.head.next;
  let slow = this.head;

  while (fast !== null && fast.next !== null && slow !== null) {
    if (fast === slow) {
      return true;
    }

    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

LinkedList.prototype.removeDuplicates = function () {
  // 3 cases
  // (1) empty list
  if (this.isEmpty()) {
    return null;
  }

  const set = new Set();
  // (2) 1 node list
  if (this.head && this.head.next === null) {
    set.add(this.head.val);
    return set;
  }

  // (3) > 1 node list
  let current = this.head;

  while (current) {
    if (!set.has(current.val)) {
      set.add(current.val);
    }
    current = current.next;
  }
  return set;
};

LinkedList.prototype.toArray = function () {
  const arr = [];
  // 3 cases
  // (1) empty list
  if (this.isEmpty()) {
    return arr;
  }

  // (2) 1 node list
  if (this.head && this.head.next === null) {
    arr.push(this.head.val);
    return arr;
  }

  // (3) > 1 node list
  let current = this.head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null; //&& this.size === 0;
};

LinkedList.prototype.length = function () {
  return this.size;
};

LinkedList.prototype.search = function (val) {
  let counter = 0;
  let current = this.head;

  while (current) {
    if (current.val === val) {
      return counter;
    }
    counter++;
    current = current.next;
  }

  return null;
};

module.exports = { LinkedList, Node };

// let prev = null;
// let oldHead = this.head;

// 1 -> (2) -> 3
// for (
//   let current = this.head;
//   current.val === this.tail.val;
//   current = current.next
// ) {
//   prev = current;
//   if (current.val === val) {
//     if (current.val === oldHead.val) {
//       this.head = null;
//       break;
//     }
//     current = current.next;
//   }
// }
// while (current) {
//   prev = current;
//   if (current.val === val) {
//     if (current.val === oldHead.val) {
//       this.head = null;
//       break;
//     }
//     current = current.next;
//     // prev.next = current.next;
//     // return counter;
//   }
//   current = current.next;
// }

// this.size--;
// return prev.val;
