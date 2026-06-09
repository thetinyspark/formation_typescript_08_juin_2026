import { IMerchant } from "../mechants/Merchant";

type Constructable<T> = { new (...args: any[]): T };

export function TurnIntoMerchant<T extends Constructable<any>>(targetClass:T){


    return class extends targetClass implements IMerchant {

        constructor(...args:any[]){
            super(...args);
        }

        public gainGold(): void {
            // implementation par défaut pour gagner des sous
        }
    }
}