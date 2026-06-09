// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans

import AbstractHeroe from "./AbstractHeroe";
import ISayan from "./ISayan";


export default class Sayan extends AbstractHeroe implements ISayan{
    
    private _transformed:boolean = false;
    
    protected override getAtkAmount(): number {
        if( this._transformed ){
            this._transformed = false;
            return this.strength * 50; 
        }

        return this.strength;
    }

    public transform():void{
        this._transformed = true;
    }

    // on peut réécrire (override) une méthode parente
    public override get alive():boolean{

        // on part du principe que notre personnage 
        // est invincible une fois transformé
        if( this._transformed )
            return true;

        // super est le moyen d'appeler la fonction 
        // définie sur la classe parente (çàd la classe Heroe)
        return super.alive;
    }
}