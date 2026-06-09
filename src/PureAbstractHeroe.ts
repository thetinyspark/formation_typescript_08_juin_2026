import IHeroe from "./IHeroe";

// c'est que ce l'on appelle une classe abstraite pure
// parce qu'elle ne propose aucune implémentation concrète 
// dont les classes vont hériter, uniquement des obligations
// d'implémentations.


// Contrairement à l'interface, la classe abstraite pure "survit"
// à la transpilation typescript -> Javascript, nous laissant la possibilité 
// d'utiliser le symbole ( la classe ) comme valeur, notamment pour une
// configuration d'injection de dépendance. 

// NB: ce n'est pas la façon de faire la plus répandue, en règle générale, 
// si le symbole que l'on souhaite référencer au sein de l'injecteur 
// ne survit pas à la compilation, alors on emploie traditionnellement 
// une chaîne de caractères à la place. 
export default abstract class PureAbstractHeroe{
    public abstract atk(opponent:IHeroe):void;
    protected abstract getAtkAmount(): number;

    public abstract get alive():boolean
    public abstract get hp():number;
    public abstract set hp(value:number);
    public abstract set strength(value:number);
    public abstract get strength():number;
}