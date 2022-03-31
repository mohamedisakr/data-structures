const { Node } = require("../linked-list");

describe("node", () => {
  it("create empty node should be instantiated", () => {
    const node = new Node();
    expect(node).toBeDefined(); //.not.toBeNull();
  });

  it("create node with value, should be instantiated", () => {
    const node = new Node(1);
    expect(node).toBeDefined(); //.not.toBeNull();
    expect(node.val).toBe(1);
  });

  it("create 2 linked node, second node not null", () => {
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    firstNode.next = secondNode;
    expect(firstNode.next).not.toBeNull();
  });
});
