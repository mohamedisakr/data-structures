const { LinkedList, Node } = require("../doubly-linked-list");

describe("empty", () => {
  it("create empty linked list should be instantiated", () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  it("create empty linked list should have no items", () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
  });
});
