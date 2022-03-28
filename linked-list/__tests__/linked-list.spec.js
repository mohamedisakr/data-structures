const { LinkedList, Node } = require("../linked-list");

describe("linked list", () => {
  it("create empty linked list should be instantiated", () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  it("create empty linked list should have no items", () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
  });

  it("push first item, should be the list head", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    const { head } = linkedList;
    expect(linkedList.size).toBe(1);
    expect(head).toEqual({ val: 1, next: null });
  });

  it("push first item, should be the list head", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    const { head } = linkedList;
    expect(linkedList.size).toBe(1);
    expect(head).toEqual({ val: 1, next: null });
  });

  it("should push new more than 1 item", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const { head } = linkedList;
    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next.next.val).toBe(3);
    expect(head.next.next.next.val).toBe(4);
  });

  it("itemAt should return null if index < 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const itemAtIndex = linkedList.itemAt(-1);
    expect(itemAtIndex).toBeNull();
  });

  it("itemAt should return null if index > size", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const itemAtIndex = linkedList.itemAt(7);
    expect(itemAtIndex).toBeNull();
  });

  it("itemAt should return item at index, if index in range of size", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const itemAtIndex = linkedList.itemAt(1);
    expect(itemAtIndex).toBe(2);
  });

  it("remove should return null, if it's a single node linked list", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);

    const removedIndex = linkedList.remove(0);
    expect(removedIndex).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  it("remove should return null if index < 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.remove(-1);
    expect(removedIndex).toBeNull();
  });

  it("remove should return null if index > size", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.remove(7);
    expect(removedIndex).toBeNull();
  });

  it("remove should return item at home, if index = 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.remove(0);
    expect(removedIndex).toBe(1);
    expect(linkedList.head.val).toBe(2);
  });

  it("remove should return item at middle, if index > 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.remove(2);
    expect(removedIndex).toBe(3);
  });

  it("remove should return item at end, if index = size-1", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.remove(3);
    expect(removedIndex).toBe(4);
  });

  it("search should return null if value does not exist", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(7);
    expect(searchIndex).toBeNull();
  });

  it("search (head) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(1);
    expect(searchIndex).toBe(0);
  });

  it("search (middle) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(3);
    expect(searchIndex).toBe(2);
  });

  it("search (tail) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(4);
    expect(searchIndex).toBe(3);
  });
});

describe("node", () => {
  it("create empty node should be instantiated", () => {
    const node = new Node();
    expect(node).not.toBeNull();
  });

  it("create value node should be instantiated", () => {
    const node = new Node(1);
    expect(node).not.toBeNull();
  });

  it("create 2 linked node, second node not null", () => {
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    firstNode.next = secondNode;
    expect(firstNode.next).not.toBeNull();
  });
});
