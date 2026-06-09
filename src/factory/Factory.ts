// le concept du pattern factory est de créer
// des instances d'autres objets. 

import Arena from "../arena/Colosseum";

export default class Factory{

    private _arenaInstance:Arena|null = null;

    public createArena():Arena{

        if( this._arenaInstance === null )
            this._arenaInstance = new Arena();

        return this._arenaInstance;
    }
}