const { MySet } = require("../set");

describe("set", () => {
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

    const secondset = new MySet();
    secondset.add(4);
    secondset.add(5);
    // console.log(`second set length: ${secondset.length()}`);

    const theUnionSet = set.union(secondset);
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

    const secondset = new MySet();
    secondset.add(3);
    secondset.add(5);

    const intersection = set.intersect(secondset);
    expect(intersection.length()).toBe(1);
  });

  test("intersect should return 0, if no intersect exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const secondset = new MySet();
    secondset.add(4);
    secondset.add(5);

    const intersection = set.intersect(secondset);
    expect(intersection.length()).toBe(0);
  });

  test("difference should return the difference of 2 sets, if it exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const secondset = new MySet();
    secondset.add(3);
    secondset.add(5);

    const diff = set.difference(secondset);
    expect(diff.length()).toBe(2);
  });

  test("difference should return 0, if no difference exists", () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);

    const secondset = new MySet();
    secondset.add(4);
    secondset.add(5);
    secondset.add(6);

    const intersection = set.intersect(secondset);
    expect(intersection.length()).toBe(0);
  });
});
