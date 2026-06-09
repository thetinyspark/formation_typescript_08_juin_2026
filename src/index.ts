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

factory.addBuilder(
    HEROE_KEY, 
    (properties:SayanInitProperties)=>{
        return new Sayan(
            properties.name,
            properties.strength, 
            properties.hp
        );
    }
    , 
    false
); 
factory.addBuilder(ARENA_KEY, (params:any[])=>new Colosseum(), false); 

const init1:SayanInitProperties = {name:"Goku", strength:100, hp:100};
const init2:SayanInitProperties = {name:"Vegeta", strength:95, hp:105};

const goku = factory.resolve<IHeroe, SayanInitProperties>(HEROE_KEY, init1);
const vege = factory.resolve<IHeroe, SayanInitProperties>(HEROE_KEY, init2);
const aren = factory.resolve<IArena, any[]>(ARENA_KEY,  [666,2,12]);