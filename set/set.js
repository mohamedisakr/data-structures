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
  this.minimum = Number.MAX_SAFE_INTEGER;
  this.maximum = Number.MAX_SAFE_INTEGER * -1;

  /**
   * checks whether the value x is in the set S.
   * @param {*} x the element to search
   * @param {*} S set S
   */
  MySet.isElementOf = function (x, S) {
    const { set } = S;
    for (let key in set) {
      if (key === x) {
        return true;
      }
    }
    return false;
  };

  /**
   * checks whether the set S is empty.
   * @param {*} S set S
   */
  MySet.isEmpty = function (S) {
    return S.size === 0;
  };

  /**
   * returns the number of elements in S.
   * @param {*} S set S
   */
  MySet.cardinality = function (S) {
    return S.size;
  };

  // create_from(collection):
  /**
   * creates a new set structure containing all the elements of
   * the given collection.
   * @param {*} collection a collection of items
   */
  MySet.createFrom = function (collection) {
    const generated = new MySet();

    if (Array.isArray(collection)) {
      // if collection is array
      collection.forEach((item) => {
        generated.add(item);
        if (this.maximum < item) {
          this.maximum = item;
        }
        if (this.minimum > item) {
          this.minimum = item;
        }
      });
    } else {
      // if collection is object
      for (let key in collection) {
        generated.add(key);
        if (this.maximum < key) {
          this.maximum = key;
        }
        if (this.minimum > key) {
          this.minimum = key;
        }
      }
    }
    return generated;
  };

  // enumerate(S):
  /**
   * returns a list containing the elements of S in some arbitrary order.
   * @param {*} S set S
   */
  MySet.enumerate = function (S) {
    const { set } = S;
    return Object.keys(set);
  };

  /**
   * returns the union of sets S and T.
   * @param {*} S set S
   * @param {*} T Set T
   */
  MySet.union = function (S, T) {
    const unionSet = new MySet();

    for (let key in S.set) {
      if (S.set.hasOwnProperty(key)) {
        unionSet.add(key);
      }
    }

    for (let key in T.set) {
      if (!unionSet.set.hasOwnProperty(key)) {
        unionSet.add(key);
      }
    }

    return unionSet;
  };

  /**
   * returns the intersection of sets S and T.
   * @param {*} S set S
   * @param {*} T Set T
   */
  MySet.intersect = function (S, T) {
    const inter = new MySet();

    for (let key in S.set) {
      if (S.set.hasOwnProperty(key) && T.set.hasOwnProperty(key)) {
        inter.add(key);
      }
    }
    return inter;
  };

  /**
   * returns the difference of sets S and T.
   * @param {*} S set S
   * @param {*} T Set T
   */
  MySet.difference = function (S, T) {
    const diff = new MySet();
    const { set } = S;
    for (let key in set) {
      if (set.hasOwnProperty(key) && !T.set.hasOwnProperty(key)) {
        diff.add(key);
      }
    }
    return diff;
  };

  /**
   * a predicate that tests whether the set S is a subset of set T.
   * @param {*} S set S
   * @param {*} T Set T
   */
  MySet.subset = function (S, T) {
    const { set } = S;
    for (let key in set) {
      if (set.hasOwnProperty(key) && !T.set.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };
}

MySet.prototype.add = function (value) {
  if (!this.set.hasOwnProperty(value)) {
    this.set[value] = "true";
    this.size++;
    if (this.maximum < value) {
      this.maximum = value;
    }
    if (this.minimum > value) {
      this.minimum = value;
    }
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

MySet.prototype.clear = function () {
  this.set = {};
  this.size = 0;
};

MySet.prototype.min = function () {
  return this.minimum;
};

MySet.prototype.max = function () {
  return this.maximum;
};

// map(F,S): returns the set of distinct values resulting from applying
// function F to each element of S.
MySet.prototype.map = function (predicate) {
  return Object.keys(this.set).map((item) => predicate(item));
};

MySet.prototype.build = function () {
  const generated = new MySet();
  // const args = Array.prototype.slice.call(arguments); // [].slice.call(arguments); // Array.from(arguments); //[...arguments];
  let args = Array.from(arguments);
  // args = [...args];
  // console.log(`args array`);
  // console.log(args);
  // console.log(`arguments : ${JSON.stringify(arguments)}`);
  // console.log(`args type : ${typeof args}`);

  args.forEach((item) => {
    // console.log(`item : ${item}`);
    if (!generated.set.hasOwnProperty(item)) {
      generated.set[item] = "true";
      generated.size++;

      if (generated.maximum < item) {
        generated.maximum = item;
      }
      if (generated.minimum > item) {
        generated.minimum = item;
      }
    }
  });
  console.log(`build : ${JSON.stringify(generated)}`);
  return generated;
};

MySet.prototype.createFrom = function (collection) {
  const generated = new MySet();

  if (Array.isArray(collection)) {
    collection.forEach((item) => {
      if (!this.set.hasOwnProperty(item)) {
        this.set[item] = "true";
        this.size++;
        if (this.maximum < item) {
          this.maximum = item;
        }
        if (this.minimum > item) {
          this.minimum = item;
        }
      }
    });
  } else {
    for (let key in collection) {
      if (!this.set.hasOwnProperty(key)) {
        this.set[key] = "true";
        this.size++;
        if (this.maximum < key) {
          this.maximum = key;
        }
        if (this.minimum > key) {
          this.minimum = key;
        }
      }
    }
  }
  return generated;
};

MySet.prototype.union = function (setA) {
  const unionSet = new MySet();
  for (let key in this.set) {
    if (this.set.hasOwnProperty(key)) {
      unionSet.add(key);
    }
  }

  for (let key in setA.set) {
    if (!unionSet.set.hasOwnProperty(key)) {
      unionSet.add(key);
    }
  }
  return unionSet;
};

MySet.prototype.intersect = function (setA) {
  const intersection = new MySet();
  for (let key in this.set) {
    if (this.set.hasOwnProperty(key) && setA.set.hasOwnProperty(key)) {
      intersection.add(key);
    }
  }
  return intersection;
};

MySet.prototype.difference = function (setA) {
  const diff = new MySet();
  for (let key in this.set) {
    // if (this.set.hasOwnProperty(key) && !setA.set.hasOwnProperty(key)) {
    if (!setA.set.hasOwnProperty(key)) {
      diff.add(key);
    }
  }
  return diff;
};

MySet.prototype.subset = function (setA) {
  for (let key in setA.set) {
    if (!this.set.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
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
