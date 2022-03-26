function Stack() {
  this.top = -1;
  this.items = [];
}

// add an item
Stack.prototype.push = function (item) {
  this.top++;
  this.items[this.top] = item;
};

// return the most recently added item, without removing it
Stack.prototype.peak = function () {
  if (this.top < 0) {
    return null;
  }
  return this.items[this.top];
};

// remove the most recently added item
Stack.prototype.pop = function () {
  if (this.top < 0) {
    return null;
  }

  const popped = this.items[this.top];

  this.top--;
  this.items.length--;

  return popped;
};

// is the stack empty?
Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// number of items in the stack
Stack.prototype.size = function () {
  return this.items.length;
};

module.exports = { Stack };
