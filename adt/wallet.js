class Wallet {
  // private int amount;

  constructor() {
    this.amount = 0;
  }

  // public void loanTo(Wallet that) {
  loanTo(that) {
    // put all of this wallet's money into that wallet
    /*A*/ that.amount += this.amount;
    /*B*/ this.amount = 0;
  }
}

export { Wallet };
