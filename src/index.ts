import AccorArena from "./arena/AccorArena";
import Colosseum from "./arena/Colosseum";
import { IArena } from "./arena/IArena";
import DynamicFactory from "./factory/DynamicFactory";
import IHeroe from "./IHeroe";
import Sayan from "./Sayan";

const factory = new DynamicFactory();
const HEROE_KEY:string = "HEROE_KEY";
const ARENA_KEY:string = "ARENA_KEY";

type SayanInitProperties = {
    name:string, 
    strength:number, 
    hp:number
};

type ArenaInitProperties = {heroes:IHeroe[]};

factory.addBuilder(
    HEROE_KEY, 
    (properties:SayanInitProperties)=>{
        return new Sayan(
            properties.name,
            properties.strength, 
            properties.hp
        );
    }, 
    false
); 
factory.addBuilder(ARENA_KEY, (params:ArenaInitProperties)=>new Colosseum(params.heroes), false); 

const init1:SayanInitProperties = {name:"Goku", strength:100, hp:100};
const init2:SayanInitProperties = {name:"Vegeta", strength:95, hp:105};
const init3:ArenaInitProperties = {
    heroes: [
        factory.resolve<IHeroe, SayanInitProperties>(HEROE_KEY, init1) as IHeroe,
        factory.resolve<IHeroe, SayanInitProperties>(HEROE_KEY, init2) as IHeroe,
    ]
};

const aren = factory.resolve<IArena, ArenaInitProperties>(ARENA_KEY,  init3);
console.log(aren?.getHeroes());