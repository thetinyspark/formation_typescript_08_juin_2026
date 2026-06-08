// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans


export default class Heroe{

    // les variables appartenant aux objets 
    // sont des propriétés
    public name:string = "noname"; 
    private _strength:number = 0;
    private _hp:number = 100;

    constructor( 
        param_name:string, 
        param_strength:number, 
        param_hp:number = 100
    ){
        this.name = param_name; 
        this.strength = param_strength;
        this.hp = param_hp; 
    }

    // les setters et les getters se comportent vu de l'extérieur
    // comme des propriétés publiques, mais en fait ce sont des fonctions

    // les setters et getters sont utiles uniquement lorsqu'on souhaite
    // exercer un contrôle sur la valeur définie ou retournée. 

    // en l'absence de contrôle, il n'est pas utile d'y avoir recours, 
    // pire, ceci est contre productif, car cela demande d'éxécuter
    // une fonction au lieu de lire une simple valeur en mémoire
    public set hp(value:number){

        if( value > 1000000)
            value = 1000000; 

        if( value < 0)
            value = 0;

        this._hp = value;
    }

    public get hp():number{
        return this._hp;
    }

    public set strength(value:number){
        // permet de renvoyer la valeur la plus petite entre
        // 500 et value, ainsi la force ne dépasse jamais 500
        value = Math.min(10000,value);

        // ici c'est l'opération inverse
        value = Math.max(value,0);

        this._strength = value;
    }

    public get strength():number{
        return this._strength;
    }

    public atk(opponent:Heroe):void{
        // donne un coup à l'adversaire et réduit d'autant ses points de vie
        opponent.hp -= this.getAtkAmount();
    }

    public get alive():boolean{
        return this.hp > 0;
    }

    protected getAtkAmount():number{
        return this.strength;
    }
}