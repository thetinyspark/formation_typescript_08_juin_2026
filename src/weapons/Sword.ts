import Weapon from "./Weapon";

export default class Sword extends Weapon{
    public strength:number = 100; 
    public durability:number = 10; 

    // si on enlève sharpness alors 
    // la structure est la même que weapon, 
    // les deux peuvent être confondues par tsc
    public sharpness:number = 100;
}