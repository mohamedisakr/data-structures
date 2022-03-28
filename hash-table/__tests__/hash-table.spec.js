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
});
