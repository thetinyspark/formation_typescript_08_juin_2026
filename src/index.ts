import AccorArena from "./arena/AccorArena";
import Colosseum from "./arena/Colosseum";
import { IArena } from "./arena/IArena";
import DynamicFactory from "./factory/DynamicFactory";
import MagicStaff from "./weapons/MagicStaff";
import Sword from "./weapons/Sword";
import Weapon from "./weapons/Weapon";

const factory = new DynamicFactory();
const production = false;
const ARENA_BUILDER_KEY:string = "ARENA_BUILDER_KEY";
const WEAPON_BUILDER_KEY = "WEAPON_BUILDER_KEY"; 

if( production){
    factory.addBuilder(ARENA_BUILDER_KEY, ()=>new AccorArena()); 
    factory.addBuilder(WEAPON_BUILDER_KEY, ()=>new Sword()); 
}
else{   
    factory.addBuilder(ARENA_BUILDER_KEY, ()=>new Colosseum()); 
    factory.addBuilder(WEAPON_BUILDER_KEY, ()=>new MagicStaff()); 
}


const json = factory.resolve<Weapon>(WEAPON_BUILDER_KEY)?.toJSON();
factory.resolve<IArena>(ARENA_BUILDER_KEY)?.startFight();

console.log(json);
