module.exports = { LinkedList, Node };

function Node(val, prev = null, next = null) {
  this.val = val || null;
  this.prev = prev;
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

module.exports = { LinkedList, Node };
