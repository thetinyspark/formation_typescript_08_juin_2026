import Heroe from "./AbstractHeroe";
import Inventory from "./Inventory";
import Mage from "./Mage";
import Sword from "./weapons/Sword";
import Weapon from "./weapons/Weapon";


const harry = new Mage("Harry", 100, 300); 
const hermione = new Mage("Hermione", 95, 300); 

const excalibur:Sword = {durability: 10, strength: 10, sharpness: 10};
excalibur.durability = 5000;
excalibur.strength = 5000;

const couteau_a_beurre:Weapon = {durability: 1, strength: 1};
excalibur.durability = 1;
excalibur.strength = 1;

const ratelier = new Inventory<Sword>();
ratelier.addItem( excalibur );


// impossible couteau_a_beurre n'est pas une sword
// ratelier.addItem( couteau_a_beurre );

console.log(ratelier.getItems());

// while( harry.alive && hermione.alive ){
//     // on va tirer un nombre au hasard entre 0 et 1
//     // en JS (et donc en typescript) ça se fait avec 
//     const toss = Math.random();

//     if( toss > 0.5 ){
//         console.log("harry atk hermione");
//         harry.atk(hermione);
//     }
//     else{
//         console.log("hermione atk harry");
//         hermione.atk(harry);
//     }
// }

// if( harry.alive)
//     console.log("harry est encore vivant");

// if( hermione.alive)
//     console.log("hermione est encore vivant");