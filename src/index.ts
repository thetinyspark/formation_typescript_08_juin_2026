
type IdCard = {
    name:string, 
    age:number, 
    job?: string 
    // le point d'interrogation permet de rendre une propriété optionnelle
};

const profiles:IdCard[] = []; 

profiles.push(
    {
        age: 40, 
        // job: "developer", 
        name: "Nicolas"
    }
);


const myMap = new Map<string, number>();
myMap.set("Cyril",44);
myMap.set("Gabriel",37);
myMap.set("Matthieu",39);
myMap.set("Nicolas",32);


myMap.delete("Nicolas");
myMap.clear();



console.log(myMap);