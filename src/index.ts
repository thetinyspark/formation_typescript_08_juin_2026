import Heroe from "./Heroe";

const goku = new Heroe("Goku", 100, 100); 
const vegeta = new Heroe("Vegeta", 95, 110); 

while( goku.isAlive() && vegeta.isAlive() ){
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

if( goku.isAlive())
    console.log("Goku est encore vivant");

if( vegeta.isAlive())
    console.log("Vegeta est encore vivant");