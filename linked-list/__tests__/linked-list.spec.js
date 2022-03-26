const { LinkedList, Node } = require("../linked-list");

describe("linked list", () => {
  it("create empty linked list should be instantiated", () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
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

    const { head } = linkedList;
    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next.next.val).toBe(3);
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
