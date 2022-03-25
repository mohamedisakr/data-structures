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
});
