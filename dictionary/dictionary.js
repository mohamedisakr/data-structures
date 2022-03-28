function Dictionary() {
  this.items = {};
  this.size = 0;
}

Dictionary.prototype.add = function (key, value) {
  const keyType = typeof key;

  if (keyType !== "string" && keyType !== "number") {
    throw Error("Key should be either string or number");
  }

  if (this.items.hasOwnProperty(key)) {
    throw Error("Key duplication");
  }

  this.items[key] = value;
  this.size++;
};

Dictionary.prototype.find = function (key) {
  if (key === null) {
    return undefined;
  }

  const keyType = typeof key;
  if (keyType !== "string" && keyType !== "number") {
    return undefined;
  }

  if (this.items.hasOwnProperty(key)) {
    return this.items[key];
  }

  return undefined;
};

Dictionary.prototype.isEmpty = function () {
  return this.size === 0;
};

module.exports = { Dictionary };
