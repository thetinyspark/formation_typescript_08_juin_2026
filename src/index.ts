import Personnage from "./Personnage";

const merlin = new Personnage(5000, "Merlin");
const mickey = new Personnage(100, "Mickey");

console.log( merlin.sayHello() );
console.log( mickey.sayHello() );
