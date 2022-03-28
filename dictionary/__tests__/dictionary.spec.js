const { Dictionary } = require("../dictionary");

describe("dictionary", () => {
  it("create empty dictionary should be instantiated", () => {
    const dictionary = new Dictionary();
    expect(dictionary).not.toBeNull();
  });

  it("create empty dictionary should have no items", () => {
    const dictionary = new Dictionary();
    expect(dictionary.isEmpty()).toBeTruthy();
  });

  it("should add new item", () => {
    const dictionary = new Dictionary();
    const key = "johndoe";
    const value = 123456789;
    dictionary.add(key, value);
    expect(dictionary.items["johndoe"]).toBe(123456789);
    expect(dictionary.isEmpty()).toBeFalsy();
  });

  it("find (null) key, should return undefind", () => {
    const dictionary = new Dictionary();
    const result = dictionary.find(null);
    expect(result).toBeUndefined();
  });

  it("find non existing key, should return undefind", () => {
    const dictionary = new Dictionary();
    const result = dictionary.find("johndoe");
    expect(result).toBeUndefined();
  });

  it("find existing key, should return its value", () => {
    const dictionary = new Dictionary();
    const key = "johndoe";
    const value = 123456789;
    dictionary.add(key, value);
    const result = dictionary.find(key);
    expect(result).toBe(value);
  });

  it("remove existing key, should decrease length", () => {
    const dictionary = new Dictionary();
    const key = "johndoe";
    const value = 123456789;

    dictionary.add(key, value);
    expect(dictionary.length()).toBe(1);

    dictionary.remove(key);
    expect(dictionary.length()).toBe(0);
  });

  it("remove non existing key, should not decrease length", () => {
    const dictionary = new Dictionary();
    const key = "johndoe";
    const value = 123456789;

    dictionary.add(key, value);
    expect(dictionary.length()).toBe(1);

    dictionary.remove("any");
    expect(dictionary.length()).toBe(1);
  });
});
