// le concept du pattern factory est de créer
// des instances d'autres objets. 

export default class DynamicFactory{
    private _builders:Map<string, Function> = new Map<string, Function>();

    public addBuilder(key:string, func:Function):void{
        this._builders.set(key, func);
    }

    public resolve<T>(key:string):T|null{
        if( this._builders.has(key)){
            const func = this._builders.get(key); 
            return func?.apply(null) as T;
        }

        return null;
    }
}