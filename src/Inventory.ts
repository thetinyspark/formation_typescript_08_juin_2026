export default class Inventory<T>{
    private _items:T[] = [];

    public addItem(item:T):void{
        this._items.push(item); 
    }

    public getItems():T[]{
        return this._items;
    }

    public removeItem(item:T):void{
        if( this._items.includes(item)){
            // on vire l'item si il est présent dans le tableau des items
            this._items.splice( this._items.indexOf(item), 1);
        }
    }
}