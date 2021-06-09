function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function (val) {
  const indexes = [];
  let index = 0;
  let currentNode = this.head;
  while (currentNode) {
    // 3 <--> 5 <--> 3 <--> 8
    if (currentNode.value === val) {
      indexes.push(index);
    }
    currentNode = currentNode.next;
    index++;
  }
  return indexes;
};

LinkedList.prototype.print = function () {
  let contents = ``;
  let currentNode = this.head;
  while (currentNode) {
    if (!currentNode.next) {
      contents += `${currentNode.value}`;
    } else {
      contents += `${currentNode.value} <--> `;
    }
    currentNode = currentNode.next;
  }
  return contents;
};

// const arr = [3, 5, 3, 8];
const arr = [1, 5, 3, 5, 8, 7, 5];
let list = new LinkedList();
arr.forEach((item) => list.addToTail(item));
console.log(list.print());
console.log(list.indexOf(arr[1]));

//   var myLL = new LinkedList();

//   myLL.addToHead(123);
//   myLL.addToHead(70);
//   myLL.addToHead('hello');
//   myLL.addToTail(19);
//   myLL.addToTail('world');
//   myLL.addToTail(20);
