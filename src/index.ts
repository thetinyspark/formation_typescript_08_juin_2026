import AccorArena from "./arena/AccorArena";
import Colosseum from "./arena/Colosseum";
import { IArena } from "./arena/IArena";
import DynamicFactory from "./factory/DynamicFactory";

const factory = new DynamicFactory();
const production = true;
const ARENA_BUILDER_KEY:string = "ARENA";

if( production){
    factory.addBuilder(ARENA_BUILDER_KEY, ()=>new AccorArena()); 
}
else{   
    factory.addBuilder(ARENA_BUILDER_KEY, ()=>new Colosseum()); 
}


factory.resolve<IArena>(ARENA_BUILDER_KEY)?.startFight();
