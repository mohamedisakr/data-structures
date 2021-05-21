import { Family } from "./family.js";
import { Person } from "./person.js";

function client1(family) {
  // get youngest person in the family
  //   let family = new Family();
  let baby = family.people.slice(-1)[0]; //.get(family.people.length - 1);
  console.log(baby);
}

let family = new Family();
let grandFather = new Person();

family.people.push(grandFather);
client1(family);
