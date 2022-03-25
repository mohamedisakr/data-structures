/*
Constructor
-------------
Set() 
  Creates a new Set object.

Static properties
------------------
get Set[@@species]   
  The constructor function that is used to create derived objects.

Instance properties
---------------------
Set.prototype.size 
  Returns the number of values in the Set object.

Instance methods
-------------------
Set.prototype.add(value) 
  Appends value to the Set object. Returns the Set object with added value.

Set.prototype.clear() 
  Removes all elements from the Set object.

Set.prototype.delete(value) 
  Removes the element associated to the value and returns a boolean asserting 
  whether an element was successfully removed or not. Set.prototype.has(value) 
  will return false afterwards.

Set.prototype.has(value) 
  Returns a boolean asserting whether an element is present with the given value 
  in the Set object or not.

Iteration methods
-------------------
Set.prototype[@@iterator]() 
  Returns a new iterator object that yields the values for each element in the 
  Set object in insertion order.

Set.prototype.values() 
   Returns a new iterator object that yields the values for each element in 
   the Set object in insertion order.

Set.prototype.keys()
  An alias for Set.prototype.values().

Set.prototype.entries()
  Returns a new iterator object that contains an array of [value, value] 
  for each element in the Set object, in insertion order.

  This is similar to the Map object, so that each entry's key is the same as 
  its value for a Set.

Set.prototype.forEach(callbackFn[, thisArg])
  Calls callbackFn once for each value present in the Set object, in insertion 
  order. If a thisArg parameter is provided, it will be used as the this value 
  for each invocation of callbackFn.
*/

function MySet() {
  this.set = {};
  this.size = 0;
}

MySet.prototype.add = function (value) {
  if (!this.set.hasOwnProperty(value)) {
    this.set[value] = "true";
    this.size++;
  }
};

MySet.prototype.remove = function (value) {
  if (this.set.hasOwnProperty(value)) {
    delete this.set[value];
    this.size--;
  }
};

MySet.prototype.has = function (value) {
  if (this.set.hasOwnProperty(value)) {
    return true;
  }
  return false;
};

MySet.prototype.length = function () {
  return this.size;
};

MySet.prototype.print = function () {
  console.log(this.set);
  // for (let key in this.set) {
  //   // if(this.set.hasOwnProperty(key))
  //   console.log(key);
  //   // console.log("Key:", key, "  Value:", this.set[key]);
  // }
};

module.exports = { MySet };
