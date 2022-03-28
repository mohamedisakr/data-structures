function Queue() {
  this.top = 0;
  this.items = [];
}

Queue.prototype.enqueue = function (item) {
  return this.items.push(item);
};

Queue.prototype.dequeue = function () {
  return this.items.shift() || null;
};

Queue.prototype.peek = function () {
  if (this.top < 0 || this.top > this.items.length || this.items.length === 0) {
    return null;
  }
  return this.items[this.top];
};

// is the queue empty?
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// number of items in the queue
Queue.prototype.size = function () {
  return this.items.length;
};

module.exports = { Queue };
