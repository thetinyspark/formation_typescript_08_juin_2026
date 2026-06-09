import Heroe from "./Heroe";
import Mage from "./Mage";
import Sayan from "./Sayan";


type Profile = {
    name:string ,
    id:number,
    hobbies: Map<string,string>
}; 

const map = new Map<string,string>();
map.set("echecs","aveugle"); 

const monProfile = {name:"toto", id: 1, hobbies: map}; 

const json = JSON.stringify(
    Array.from(map.keys()).reduce( 
        (obj:any, currentKey:string)=>{
            obj[currentKey] = map.get(currentKey);
            return obj;
        }, 
        {}
    )
);

console.log(json);

// const harry = new Mage("Harry", 100, 300); 

// const hermione = new Mage("Hermione", 95, 300); 

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