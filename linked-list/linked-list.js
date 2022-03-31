function Node(val, next = null) {
  this.val = val || null;
  this.next = next;
}

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

LinkedList.prototype.isEmpty = function () {
  return this.head === null && this.size === 0;
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
