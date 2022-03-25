const { MySet } = require("../set");

describe("instance", () => {
  test("set should be empty initially", () => {
    const set = new MySet();
    expect(set.set).toEqual({});
    expect(set.size).toBe(0);
  });

  test("set should save item if it is unique", () => {
    const set = new MySet();
    set.add(1);
    expect(set.size).toBe(1);
  });

  test("set should not save item if it is duplicated", () => {
    const set = new MySet();
    set.add(1);
    set.add(1);
    expect(set.size).toBe(1);
  });

  test("set should remove item if it is already exists/saved", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    set.remove(1);
    expect(set.size).toBe(2);
  });

  test("has should return true if item already exists/saved", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    const hasItem = set.has(1);
    expect(hasItem).toBeTruthy();
  });

  test("has should return true if item already exists/saved", () => {
    const set = new MySet();
    const hasItem = set.has(1);
    expect(hasItem).toBeFalsy();
  });

  test("size should return 0, if no items", () => {
    const set = new MySet();
    expect(set.length()).toBe(0);
  });

  test("size should return the correct length if set has items", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.length()).toBe(3);
  });

  test("union should return the combination of 2 sets", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    // console.log(`this set length: ${set.length()}`);

    const setA = new MySet();
    setA.add(4);
    setA.add(5);
    // console.log(`second set length: ${setA.length()}`);

    const theUnionSet = set.union(setA);
    // console.log(theUnionSet);
    expect(theUnionSet.length()).toBe(5);
    expect(theUnionSet.set).toEqual({
      1: "true",
      2: "true",
      3: "true",
      4: "true",
      5: "true",
    });
  });

  test("intersect should return the intersection of 2 sets, if it exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const setA = new MySet();
    setA.add(3);
    setA.add(5);

    const intersection = set.intersect(setA);
    expect(intersection.length()).toBe(1);
  });

  test("intersect should return 0, if no intersect exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const setA = new MySet();
    setA.add(4);
    setA.add(5);

    const intersection = set.intersect(setA);
    expect(intersection.length()).toBe(0);
  });

  test("difference should return the difference of 2 sets, if it exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const setA = new MySet();
    setA.add(3);
    setA.add(5);

    const diff = set.difference(setA);
    expect(diff.length()).toBe(2);
  });

  test("difference should return 0, if no difference exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const setA = new MySet();
    setA.add(4);
    setA.add(5);
    setA.add(6);

    const intersection = set.intersect(setA);
    expect(intersection.length()).toBe(0);
  });

  test("subset should be true, if set A is subset of the current set", () => {
    const set = new MySet();
    set.add(0);
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);

    const setA = new MySet();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    const isSubset = set.subset(setA);
    expect(isSubset).toBeTruthy();
  });

  test("subset should be false, if set A has at least 1 element that is not in the current set", () => {
    const set = new MySet();
    set.add(0);
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);

    const setA = new MySet();
    setA.add(1);
    setA.add(2);
    setA.add(6);

    const isSubset = set.subset(setA);
    expect(isSubset).toBeFalsy();
  });
});

describe("static", () => {
  test("union should return the combination of 2 sets", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(4);
    setT.add(5);

    const theUnionSet = MySet.union(setS, setT);
    console.log(theUnionSet);
    expect(theUnionSet.length()).toBe(5);

    expect(theUnionSet.set).toEqual({
      1: "true",
      2: "true",
      3: "true",
      4: "true",
      5: "true",
    });
  });

  test("intersect should return the intersection of 2 sets, if it exists", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(3);
    setT.add(5);

    const intersection = MySet.intersect(setS, setT);
    expect(intersection.length()).toBe(1);
  });

  test("intersect should return 0, if no intersect exists", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(4);
    setT.add(5);

    const intersection = MySet.intersect(setS, setT);
    expect(intersection.length()).toBe(0);
  });

  test("difference should return the difference of 2 sets, if it exists", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(3);
    setT.add(5);

    const diff = MySet.difference(setS, setT);
    expect(diff.length()).toBe(2);
  });

  test("difference should return all of set S, if no not exists in set T", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(4);
    setT.add(5);
    setT.add(6);

    const diff = MySet.difference(setS, setT);
    expect(diff.length()).toBe(3);
  });

  test("difference should return 0, if no difference exists", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(1);
    setT.add(2);
    setT.add(3);

    const diff = MySet.difference(setS, setT);
    expect(diff.length()).toBe(0);
  });

  test("subset should be true, if set A is subset of the current set", () => {
    const setS = new MySet();
    setS.add(1);
    setS.add(2);
    setS.add(3);

    const setT = new MySet();
    setT.add(0);
    setT.add(1);
    setT.add(2);
    setT.add(3);
    setT.add(4);
    setT.add(5);

    const isSubset = MySet.subset(setT, setT);
    expect(isSubset).toBeTruthy();
  });

  test("subset should be false, if set A has at least 1 element that is not in the current set", () => {
    const setS = new MySet();
    setS.add(0);
    setS.add(1);
    setS.add(2);
    setS.add(3);
    setS.add(4);
    setS.add(5);

    const setT = new MySet();
    setT.add(1);
    setT.add(2);
    setT.add(6);

    const isSubset = MySet.subset(setS, setT);
    expect(isSubset).toBeFalsy();
  });

  test("element of should be true, if the element is in the set", () => {
    const setS = new MySet();
    setS.add(0);
    setS.add(1);
    setS.add(2);
    setS.add(3);
    setS.add(4);
    setS.add(5);

    const isElement = MySet.isElementOf("0", setS);
    expect(isElement).toBeTruthy();
  });

  test("element of should be false, if the element is not in the set", () => {
    const setS = new MySet();
    setS.add(0);
    setS.add(1);
    setS.add(2);
    setS.add(3);
    setS.add(4);
    setS.add(5);

    const isElement = MySet.isElementOf("6", setS);
    expect(isElement).toBeFalsy();
  });

  test("is empty should return true, if the set size > 0", () => {
    const setS = new MySet();
    setS.add(0);
    setS.add(1);
    setS.add(2);
    setS.add(3);
    setS.add(4);
    setS.add(5);

    const isEmpty = MySet.isEmpty(setS);
    expect(isEmpty).toBeFalsy();
  });

  test("is empty should return true, if the set size > 0", () => {
    const setS = new MySet();
    const isEmpty = MySet.isEmpty(setS);
    expect(isEmpty).toBeTruthy();
  });

  test("cardinality should return 0, if no items", () => {
    const set = new MySet();
    expect(MySet.cardinality(set)).toBe(0);
  });

  test("cardinality should return the correct length if set has items", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(MySet.cardinality(set)).toBe(3);
  });

  test("createFrom should read an array", () => {
    const arr = [1, 2, 3];
    const gen = MySet.createFrom(arr);
    expect(MySet.cardinality(gen)).toBe(3);
  });

  test("createFrom should read an object", () => {
    const obj = { 1: "true", 2: "true", 3: "true" };
    const gen = MySet.createFrom(obj);
    expect(MySet.cardinality(gen)).toBe(3);
  });
});
