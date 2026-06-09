// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans

import AbstractHeroe from "./AbstractHeroe";
import IMage from "./IMage";


export default class Mage extends AbstractHeroe implements IMage{
    
    private _stamina:number = 100;
    private _mana:number = 100;

    public reloadMana(): void {
        this._mana = 100;
    }


    // on peut réécrire (override) une méthode parente
    protected override getAtkAmount():number{
        if( this._mana >= 50 ){
            this._mana -= 50;
            return this.strength * 2;
        }
        else if( this._stamina >= 20 ){
            this._stamina -= 20;
            return this.strength;
        }
        else{
            return 1;
        }
    }
}