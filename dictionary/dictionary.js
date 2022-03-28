function Dictionary() {
  this.items = {};
  this.size = 0;
}

Dictionary.prototype.isEmpty = function () {
  return this.size === 0;
};

module.exports = { Dictionary };
