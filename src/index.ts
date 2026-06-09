import AccorArena from "./arena/AccorArena";
import { IArena } from "./arena/IArena";
import DynamicFactory from "./factory/DynamicFactory";

const factory = new DynamicFactory();
const ARENA_BUILDER_KEY:string = "ARENA_BUILDER_KEY";

factory.addBuilder(ARENA_BUILDER_KEY, ()=>new AccorArena(), true); 

const instance1 = factory.resolve<IArena>(ARENA_BUILDER_KEY);
const instance2 = factory.resolve<IArena>(ARENA_BUILDER_KEY);

console.log(instance1 === instance2);
