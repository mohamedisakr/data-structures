function Node(val) {
  this.val = val || null;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

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

module.exports = { LinkedList, Node };
