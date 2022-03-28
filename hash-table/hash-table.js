function HashTable() {
  this.bucketSize = 23;
  this.buckets = [];
  this.buckets.length; //= this.bucketSize;
}

HashTable.prototype.computeHash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; ++i) {
    total += key.charCodeAt(i);
  }
  return total % this.bucketSize;
};

HashTable.prototype.put = function (key, value) {
  let keyType = typeof key;
  if (keyType !== "string" && keyType !== "number") {
    throw "Only string or number keys are supported";
  }

  let hash = this.computeHash(key);
  if (this.buckets[hash] === undefined) {
    this.buckets[hash] = {};
  }

  let chain = this.buckets[hash];
  if (chain.hasOwnProperty(key)) {
    throw "Duplicate key is not allowed";
  }

  chain[key] = value;
};

HashTable.prototype.get = function (key) {
  let keyType = typeof key;
  if (keyType !== "string" && keyType !== "number") {
    return undefined;
  }

  let hash = this.computeHash(key);
  if (this.buckets[hash] === undefined) {
    return undefined;
  }

  let chain = this.buckets[hash];
  if (chain.hasOwnProperty(key)) {
    return chain[key];
  }

  return undefined;
};

HashTable.prototype.isEmpty = function () {
  return this.buckets.length === 0;
};

HashTable.prototype.length = function () {
  return this.buckets.length;
};

module.exports = { HashTable };
