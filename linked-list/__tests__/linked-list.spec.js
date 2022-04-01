const { LinkedList, Node } = require("../linked-list");
// Node
// describe("linked list", () => {
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

describe("pushAtHead", () => {
  it("only one node, should be the list head", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtHead(1);
    const { head } = linkedList;
    expect(linkedList.size).toBe(1);
    expect(head.val).toBe(1);
  });

  it("2 nodes, the 2nd should be the list head", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtHead(1);
    linkedList.pushAtHead(2);
    const { head } = linkedList;
    expect(linkedList.size).toBe(2);
    expect(head.val).toBe(2);
  });

  it("4 nodes, the 4th should be the list head & first the tail", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtHead(1);
    linkedList.pushAtHead(2);
    linkedList.pushAtHead(3);
    linkedList.pushAtHead(4);

    const { head, tail } = linkedList;
    expect(linkedList.size).toBe(4);
    expect(head.val).toBe(4);
    expect(tail.val).toBe(1);
  });
});

describe("pushAtTail", () => {
  it("only one node, should be the list head & tail as well", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtTail(1);
    const { head, tail } = linkedList;
    expect(linkedList.size).toBe(1);
    expect(head.val).toBe(1);
    expect(tail.val).toBe(1);
  });

  it("2 nodes, the 2nd should be the list head", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtTail(1);
    linkedList.pushAtTail(2);
    const { head, tail } = linkedList;
    expect(linkedList.size).toBe(2);
    expect(head.val).toBe(1);
    expect(tail.val).toBe(2);
  });

  it("4 nodes, the 4th should be the list head & first the tail", () => {
    const linkedList = new LinkedList();
    linkedList.pushAtTail(1);
    linkedList.pushAtTail(2);
    linkedList.pushAtTail(3);
    linkedList.pushAtTail(4);

    const { head, tail } = linkedList;
    expect(linkedList.size).toBe(4);
    expect(head.val).toBe(1);
    expect(tail.val).toBe(4);
  });
});

describe("pushAtNth", () => {
  it("should return null if index < 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    linkedList.pushAtNth(-1);
    expect(linkedList.size).toBe(4);
  });

  it("should return null if index > size", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    linkedList.pushAtNth(7);
    expect(linkedList.size).toBe(4);
  });

  it("4 nodes, the 4th should be the list head & first the tail", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    linkedList.pushAtNth(2, 5);

    const { head, tail } = linkedList;
    expect(linkedList.size).toBe(5);
    expect(head.val).toBe(1);
    expect(head.next.next.next.val).toBe(5);
    expect(tail.val).toBe(4);
  });
});

describe("push", () => {
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
});

describe("itemAt", () => {
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
});

describe("removeByIndex", () => {
  it("should return null, if it's a single node linked list", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);

    const removedIndex = linkedList.removeByIndex(0);
    expect(removedIndex).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  it("should return null if index < 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByIndex(-1);
    expect(removedIndex).toBeNull();
  });

  it("should return null if index > size", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByIndex(7);
    expect(removedIndex).toBeNull();
  });

  it("should return item at home, if index = 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByIndex(0);
    expect(removedIndex).toBe(1);
    expect(linkedList.head.val).toBe(2);
  });

  it("should return item at middle, if index > 0", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByIndex(2);
    expect(removedIndex).toBe(3);
  });

  it("remove should return item at end, if index = size-1", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByIndex(3);
    expect(removedIndex).toBe(4);
  });
});

describe("removeByValue", () => {
  it("empty list, should return false", () => {
    const linkedList = new LinkedList();
    const removedValue = linkedList.removeByValue(1);
    expect(removedValue).toBeFalsy();
  });

  it("1 existing value should empty the list, return true", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);

    const removedValue = linkedList.removeByValue(1);
    // console.log("test head node ", linkedList.head);
    // expect(linkedList.head).toBeNull();
    expect(linkedList.length()).toBe(0);
    expect(removedValue).toBeTruthy();
  });

  it("1 non-existing value should not empty the list, return false", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);

    const removedValue = linkedList.removeByValue(2);
    // console.log("test head node ", linkedList.head);
    // expect(linkedList.head).toBeNull();
    expect(removedValue).toBeFalsy();
    expect(linkedList.length()).toBe(1);
  });

  it("node at tail, should return item true", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedValue = linkedList.removeByValue(4);
    expect(removedValue).toBeTruthy();
    expect(linkedList.length()).toBe(3);
  });

  it("node at middle, should return true", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const removedIndex = linkedList.removeByValue(2);
    expect(removedIndex).toBeTruthy();
  });
});

describe("removeAtHead", () => {
  it("should return false if linked list is empty", () => {
    const linkedList = new LinkedList();
    const removedValue = linkedList.removeAtHead();
    expect(removedValue).toBeFalsy();
  });

  it("should empty linked list if it has 1 node only", () => {
    const linkedList = new LinkedList();
    linkedList.push(4);
    expect(linkedList.length()).toBe(1);
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    const removedValue = linkedList.removeAtHead();

    expect(removedValue).toBeTruthy();
    expect(linkedList.length()).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("should head next node to be the new head if list has more than 1 node", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.length()).toBe(4);
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    const removedValue = linkedList.removeAtHead();

    expect(removedValue).toBeTruthy();
    expect(linkedList.length()).toBe(3);
    expect(linkedList.head.val).toBe(2);
    expect(linkedList.tail.val).toBe(4);
  });
});

describe("removeAtTail", () => {
  it("should return false if linked list is empty", () => {
    const linkedList = new LinkedList();
    const removedValue = linkedList.removeAtTail();
    expect(removedValue).toBeFalsy();
  });

  it("should empty linked list if it has 1 node only", () => {
    const linkedList = new LinkedList();
    linkedList.push(4);
    expect(linkedList.length()).toBe(1);
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    const removedValue = linkedList.removeAtTail();

    expect(removedValue).toBeTruthy();
    expect(linkedList.length()).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("should tail previous node to be the new tail if list has more than 1 node", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.length()).toBe(4);
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    const removedValue = linkedList.removeAtTail();

    expect(removedValue).toBeTruthy();
    expect(linkedList.length()).toBe(3);
    expect(linkedList.tail.val).toBe(3);
  });
});

describe("search", () => {
  it("should return null if value does not exist", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(7);
    expect(searchIndex).toBeNull();
  });

  it("(head) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(1);
    expect(searchIndex).toBe(0);
  });

  it("(middle) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(3);
    expect(searchIndex).toBe(2);
  });

  it("(tail) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);
    linkedList.push(4);

    const searchIndex = linkedList.search(4);
    expect(searchIndex).toBe(3);
  });
});

/*
describe("search", () => {
  it("should return null if value does not exist", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(7);
    expect(searchIndex).toBeNull();
  });

  it("(head) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(1);
    expect(searchIndex).toBe(0);
  });

  it("(middle) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const searchIndex = linkedList.search(3);
    expect(searchIndex).toBe(2);
  });

  it("(tail) should return value index if value exists", () => {
    const linkedList = new LinkedList();
    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);
    linkedList.push(4);

    const searchIndex = linkedList.search(4);
    expect(searchIndex).toBe(3);
  });
});
*/
