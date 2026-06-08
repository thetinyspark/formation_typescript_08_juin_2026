function helloWorld():void{
    console.log("Hello world");
}


const str:string = "Hello world";
const isInFormation:boolean = true; 

// toujours préciser le type de données 
// quand le peut et ne pas recourir à l'inférence de type. 
const participants:string[] = [
    "Cyril", 
    "Gabriel", 
    "Matthieu", 
    "Nicolas"
]; 

const obj:any = {
    participant1: "Cyril",
    participant2: "Gabriel",
    participant3: "Matthieu",
    participant4: "Nicolas", 
    participant20: undefined // <- à ne jamais faire, c'est mal, chaque fois que vous faites ça, un chaton meurt
};



// quand on met un double égal, on compare les valeurs et Javascript
// peut convertir le type le plus compliqué vers le type le plus simple
// les valeurs ainsi converties sont comparées

// le triple égal empêche la conversion implicite, ainsi, les valeurs 
// ainsi que leurs types sont comparées.
console.log(null === undefined);