const { Node } = require("../linked-list");

describe("node", () => {
  it("should create empty node should be instantiated", () => {
    const node = new Node();
    expect(node).toBeDefined(); //.not.toBeNull();
  });

  it("should create node with value, should be instantiated", () => {
    const node = new Node(1);
    expect(node).toBeDefined(); //.not.toBeNull();
    expect(node.val).toBe(1);
  });

  it("should create 2 linked node, second node not null", () => {
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    firstNode.next = secondNode;
    expect(firstNode.next).not.toBeNull();
    expect(secondNode.next).toBeNull();
  });

  it("should create node from object", () => {
    const nodeObject = { val: 1, next: null };
    const { val, next } = nodeObject;
    const myNode = new Node(val, next);
    expect(myNode.val).toBe(+1);
    expect(myNode.next).toBeNull();
  });

  it("should returns a string representing the node", () => {
    const nodeObject = { val: 1, next: null };
    const { val, next } = nodeObject;
    const myNode = new Node(val, next);
    expect(myNode.toString()).toBe("1, null");
  });
});
