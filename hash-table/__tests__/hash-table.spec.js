const { HashTable } = require("../hash-table");

describe("hash table", () => {
  it("create empty hash table should be instantiated", () => {
    const hashTable = new HashTable();
    expect(hashTable).not.toBeNull();
  });

  it("create empty hash table should have no items", () => {
    const hashTable = new HashTable();
    expect(hashTable.isEmpty()).toBeTruthy();
  });

  it("add new item, should increase length", () => {
    const hashTable = new HashTable();
    const key = "johndoe";
    const value = 123456789;
    hashTable.put(key, value);
    expect(hashTable.isEmpty()).toBeFalsy();
  });

  it("get (null) key, should return undefind", () => {
    const hashTable = new HashTable();
    const result = hashTable.get(null);
    expect(result).toBeUndefined();
  });

  it("get non existing key, should return undefind", () => {
    const hashTable = new HashTable();
    const result = hashTable.get("johndoe");
    expect(result).toBeUndefined();
  });

  it("get existing key, should return its value", () => {
    const hashTable = new HashTable();
    const key = "johndoe";
    const value = 123456789;
    hashTable.put(key, value);
    const result = hashTable.get(key);
    expect(result).toBe(value);
  });
});
