const { Stack } = require("../stack");

describe("stack", () => {
  it("create empty stack should be instantiated", () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
  });

  it("create empty stack should have no items", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should push new item", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it("peak return null, if no items", () => {
    const stack = new Stack();
    const result = stack.peak();
    expect(result).toBeNull();
  });

  it("peak return the most recently added item, if any", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const result = stack.peak();
    expect(result).toBe(3);
  });

  it("pop return null, if no items", () => {
    const stack = new Stack();
    const result = stack.pop();
    expect(result).toBeNull();
  });

  it("pop return the most recently added item, if any", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const result = stack.pop();

    expect(result).toBe(3);
    expect(stack.size()).toBe(2);
  });
});
