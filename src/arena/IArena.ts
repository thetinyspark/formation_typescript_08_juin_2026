import IHeroe from "../IHeroe";

export interface IArena{
    addHeroe(heroe:IHeroe):void;
    removeHeroe(heroe:IHeroe):void;
    startFight():IHeroe | null;
    getHeroes():IHeroe[];
}