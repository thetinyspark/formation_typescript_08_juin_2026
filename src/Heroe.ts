// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans


export default class Heroe{

    // les variables appartenant aux objets 
    // sont des propriétés
    private strength:number = 0;
    public name:string = "noname"; 
    public hp:number = 100;

    constructor( 
        param_name:string, 
        param_strength:number, 
        param_hp:number = 100
    ){
        this.name = param_name; 
        this.hp = param_hp; 
        this.strength = param_strength;
    }

    public atk(opponent:Heroe):void{
        // donne un coup à l'adversaire et réduit d'autant ses points de vie
        opponent.hp -= this.strength;
    }

    public isAlive():boolean{
        return this.hp > 0;
    }
}