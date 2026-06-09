import HeroeWithWeapon from "./HeroeWithWeapon";
import MagicStaff from "./weapons/MagicStaff";
import Sword from "./weapons/Sword";


const harry = new HeroeWithWeapon("Harry", 100, 300); 
const hermione = new HeroeWithWeapon("Hermione", 95, 300); 


const excalibur:Sword = {durability: 10, strength: 15, sharpness: 10};
const baguette:MagicStaff = {durability: 10, strength: 20};

harry.addWeapon(excalibur); 
hermione.addWeapon(baguette); 

harry.equipWeaponByIndex(0);
hermione.equipWeaponByIndex(0);


harry.atk(hermione); 
console.log("-------------------");
console.log(`Harry est vivant: ${harry.alive}, HP de harry ${harry.hp}`);
console.log(`Hermione est vivante: ${hermione.alive}, HP de Hermione ${hermione.hp}`);

hermione.atk(harry); 
console.log("-------------------");
console.log(`Harry est vivant: ${harry.alive}, HP de harry ${harry.hp}`);
console.log(`Hermione est vivante: ${hermione.alive}, HP de Hermione ${hermione.hp}`);