// le concept du pattern factory est de créer
// des instances d'autres objets. 
type BuilderInfo = { singleton:boolean, builder:Function, uniqInstance:any}; 

export default class DynamicFactory{
    private _builders:Map<string, BuilderInfo> = new Map<string, BuilderInfo>();

    public addBuilder(key:string, func:Function, singleton:boolean = false):void{
        this._builders.set(
            key, 
            {
                singleton: singleton,
                builder:func, 
                uniqInstance: null
            }
        );
    }

    public resolve<T,U>(key:string, params:U):T|null{

        let instance:T|null = null;

        // si on a un builder qui répond à la clé
        if( this._builders.has(key)){

            // alors on va chercher le builderinfo en question
            const builderInfo:BuilderInfo|null = this._builders.get(key) || null; 

            // si le builderInfo doit gérer une instance unique
            if( builderInfo?.singleton === true){

                // que cette instance unique existe déjà
                if( builderInfo?.uniqInstance !== null){

                    // alors on retourne l'instance unique
                    instance = builderInfo?.uniqInstance as T;
                }
                else{

                    // sinon on crée une nouvelle instance que l'on stocke
                    // sur builderinfo et que l'on retourne à la fin
                    instance = builderInfo?.builder(params) as T;
                    builderInfo.uniqInstance = instance;
                }
            }
            else{
                // si le builderinfo ne doit pas gérer d'instance unique, 
                // alors on retourne une nouvelle instance à chaque fois
                instance = builderInfo?.builder(params) as T;
            }

        }

        return instance;
    }
}