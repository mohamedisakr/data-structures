import { Wallet } from "./wallet.js";

class Person {
  // private Wallet w;
  constructor() {
    this.w = new Wallet();
  }

  getNetWorth() {
    /*F*/
    return this.w.amount;
  }

  isBroke() {
    /*G*/
    return this.w.amount == 0;
  }
}

export { Person };
