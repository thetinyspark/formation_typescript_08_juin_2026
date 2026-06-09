import IHeroe from "../heroes/IHeroe";
import { IArena } from "./IArena";

export default class Colosseum implements IArena{

    // ceci est une propriété d'un objet, 
    // çàd que cette propriété est décrite 
    // par la classe, mais elle n'appartient 
    // pas à cette dernière. Elle appartient 
    // à un objet de type Arena construit à partir
    // de la classe. 
    private _heroes:IHeroe[] = []; 

    public constructor( heroes:IHeroe[]){
        this._heroes = heroes;
    }
    
    public getHeroes(): IHeroe[] {
        return this._heroes;
    }


    // gérer les héros ainsi que leur combat est une responsabilité
    public addHeroe(heroe:IHeroe):void{

    }
    public removeHeroe(heroe:IHeroe):void{

    }
    public startFight():IHeroe | null{
        console.log("le colisée hurle");
        return null;
    }


}