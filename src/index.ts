// import des 3 fonctions
// import { calculerAireRectangle, degToRadian, pythagore } from "./math.utils";

// console.log(calculerAireRectangle(10,5));
// console.log(pythagore(3,4));
// console.log(degToRadian(180));

// importer tout le module et lui donner un alias
import * as MyMathLib from "./math.utils";

console.log(MyMathLib.calculerAireRectangle(10,5));
console.log(MyMathLib.pythagore(3,4));
console.log(MyMathLib.degToRadian(180));
console.log(MyMathLib.multiply(180, 10));