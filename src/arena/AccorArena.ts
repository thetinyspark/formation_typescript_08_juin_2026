import IHeroe from "../IHeroe";
import { IArena } from "./IArena";

export default class AccorArena implements IArena{

    private _heroes:IHeroe[] = []; 

    // gérer les héros ainsi que leur combat est une responsabilité
    public addHeroe(heroe:IHeroe):void{

    }
    public removeHeroe(heroe:IHeroe):void{

    }
    public startFight():IHeroe | null{
        console.log("contrôle des billets");
        return null;
    }


}