import { Wallet } from "./wallet.js";

//     public static void main(String[] args) {
// /*C*/       Wallet w = new Wallet();
// /*D*/       w.amount = 100;
// /*E*/       w.loanTo(w);
//     }

/*C*/
let w = new Wallet();

/*D*/
w.amount = 100;
console.log(w.amount);

/*E*/
w.loanTo(w);

console.log(w.amount);
