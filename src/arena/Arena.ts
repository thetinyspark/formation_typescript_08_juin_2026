import IHeroe from "../IHeroe";

export default class Arena{

    // ceci est une propriété d'un objet, 
    // çàd que cette propriété est décrite 
    // par la classe, mais elle n'appartient 
    // pas à cette dernière. Elle appartient 
    // à un objet de type Arena construit à partir
    // de la classe. 
    private _heroes:IHeroe[] = []; 


    // Une propriété statique, n'appartient pas 
    // aux objets construits à partir de la classe 
    // mais bien à la classe elle-même. Cela
    // va nous servir à stocker des valeurs
    // de façon unique sur la classe
    private static _instance:Arena|null = null;

    // les fonctions statiques sont éxécutées à partir de la classe elle-même
    // gérer le stockage et l'accès à une instance unique de Arena 
    // est aussi une responsabilité
    public static getInstance():Arena{
        if( this._instance === null )
            this._instance = new Arena();

        return this._instance;
    }

    private constructor(){}


    // gérer les héros ainsi que leur combat est une responsabilité
    public addHeroe(heroe:IHeroe):void{

    }
    public removeHeroe(heroe:IHeroe):void{

    }
    public startFight():IHeroe | null{
        return null;
    }


}