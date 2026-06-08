// une classe est une espèce de plan de conception
// pour des objets. Ces plans sont utilisés à chaque 
// que l'on crée un nouvel objet à partir des plans

import Heroe from "./Heroe";


export default class Mage extends Heroe{
    
    private _stamina:number = 100;
    private _mana:number = 100;


    // on peut réécrire (override) une méthode parente
    public override atk( opponent:Heroe):void{
        if( this._mana >= 50 ){
            console.log(this.name, ": wingardium boost moi çaaaaa !!");
            opponent.hp -= this.strength * 2;
            this._mana -= 50;
        }
        else if( this._stamina >= 20 ){
            super.atk(opponent);
            this._stamina -= 20;
        }
        else{
            console.log(this.name, " est fatigué(e)");
            opponent.hp -= 1;
        }
    }
}