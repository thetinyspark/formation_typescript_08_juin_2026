import AbstractHeroe from "./AbstractHeroe";
import Inventory from "../Inventory";
import Weapon from "../weapons/Weapon";


export default class HeroeWithWeapon extends AbstractHeroe {

    private _inventory:Inventory<Weapon> = new Inventory<Weapon>(); 
    private _currentWeapon:Weapon|null = null;

    public addWeapon(weapon:Weapon):void{
        this._inventory.addItem(weapon); 
    }

    public removeWeapon(weapon:Weapon):void{
        this._inventory.removeItem(weapon); 
    }

    public equipWeaponByIndex(weaponIndex:number):void{
        this._currentWeapon = this._inventory.getItemAt(weaponIndex);
    }


    // on peut réécrire (override) une méthode parente
    protected override getAtkAmount():number{
        // si l'arme est nulle alors on a bonus de force de 0
        // sinon le bonus équivaut à la force de l'arme équipée
        const bonus = ( this._currentWeapon === null ) ? 0 : this._currentWeapon.strength;
        return this.strength + bonus;
    }
}