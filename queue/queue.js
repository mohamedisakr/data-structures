function Queue() {
  this.top = -1;
  this.items = [];
}

Queue.prototype.enqueue = function (item) {
  this.top++;
  this.items.push(item);
};

Queue.prototype.dequeue = function () {
  if (this.top < 0 || this.top > this.items.length) {
    return null;
  }
  const dequeued = this.items[this.top];
  this.top++;
  return dequeued;
};

Queue.prototype.peek = function () {
  if (this.top < 0 || this.top > this.items.length) {
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
