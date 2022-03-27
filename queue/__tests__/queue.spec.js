const { Queue } = require("../queue");

describe("queue", () => {
  it("create empty queue should be instantiated", () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
  });

  it("create empty queue should have no items", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should enqueue new item", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it("peek return null, if no items", () => {
    const queue = new Queue();
    const result = queue.peek();
    expect(result).toBeNull();
  });

  it("peek return the most recently added item, if any", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const result = queue.peek();
    expect(result).toBe(1);
  });

  it("dequeue return null, if no items", () => {
    const queue = new Queue();
    const result = queue.dequeue();
    expect(result).toBeNull();
  });

  it("dequeue return the most recently added item, if any", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const result = queue.dequeue();

    expect(result).toBe(1);
    expect(queue.size()).toBe(2);
  });
});
