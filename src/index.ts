import Heroe from "./Heroe";

const goku = new Heroe("Goku", 1000_000, 100); 
const vegeta = new Heroe("Vegeta", 95, 110); 

console.log(goku.hp, goku.strength);
console.log(vegeta.hp, vegeta.strength);


while( goku.alive && vegeta.alive ){
    // on va tirer un nombre au hasard entre 0 et 1
    // en JS (et donc en typescript) ça se fait avec 
    const toss = Math.random();

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