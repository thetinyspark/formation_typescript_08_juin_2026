import Heroe from "./Heroe";
import Sayan from "./Sayan";

const goku = new Sayan("Goku", 100, 1000); 
const vegeta = new Sayan("Vegeta", 95, 1100); 

console.log(goku.hp, goku.strength);
console.log(vegeta.hp, vegeta.strength);

while( goku.alive && vegeta.alive ){
    // on va tirer un nombre au hasard entre 0 et 1
    // en JS (et donc en typescript) ça se fait avec 
    const toss = Math.random();
    const amIAngry:boolean = Math.random() > 0.9;

    if( amIAngry ){
        console.log("AAAAAAAAHHHHHHH CHEVEUX JAUNES ! ");
        goku.transform();    
        console.log(goku.hp, goku.strength);
    }

    if( toss > 0.5 ){
        console.log("Goku atk Vegeta");
        goku.atk(vegeta);
    }
    else{
        console.log("Vegeta atk Goku");
        vegeta.atk(goku);
    }
}

if( goku.alive)
    console.log("Goku est encore vivant");

if( vegeta.alive)
    console.log("Vegeta est encore vivant");