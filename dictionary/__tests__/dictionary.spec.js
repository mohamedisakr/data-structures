const { Dictionary } = require("../dictionary");

describe("dictionary", () => {
  it("create empty dictionary should be instantiated", () => {
    const dictionary = new Dictionary();
    expect(dictionary).not.toBeNull();
  });

  it("create empty dictionary should have no items", () => {
    const dictionary = new Dictionary();
    expect(dictionary.isEmpty()).toBeTruthy();
  });

  it("should add new item", () => {
    const dictionary = new Dictionary();
    const phone = { johndoe: 123456789 };
    dictionary.add("johndoe", 123456789);
    expect(dictionary.isEmpty()).toBeFalsy();
  });
});
