// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans


export default class Personnage{

    // les variables appartenant aux objets 
    // sont des propriétés
    private age:number = 0; 
    private name:string = "noname"; 

    constructor( param_age:number, param_name:string){
        this.age = param_age;
        this.name = param_name;
        console.log("création d'un nouveau personnage");
    }

    // les fonctions appartenant à des objets sont 
    // appelées des méthodes.
    private sayHello():void{
        console.log("Bonjour, je m'appelle ", this.name, "et j'ai ", this.age, "ans");
    }
}