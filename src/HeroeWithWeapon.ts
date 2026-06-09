import AbstractHeroe from "./AbstractHeroe";


export default class HeroeWithWeapon extends AbstractHeroe {



    // on peut réécrire (override) une méthode parente
    protected override getAtkAmount():number{
        return this.strength;
    }
}