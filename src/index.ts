import Mage from "./heroes/Mage";
import { TurnIntoMerchant } from "./mixin/TurnIntoMerchant";


class MageMerchant extends TurnIntoMerchant(Mage){}

const heroeMerchant = new MageMerchant("merlin",100,100);
heroeMerchant.gainGold();

