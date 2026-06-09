// un contrat d'interface sert à décrire le fonctionnement d'un 
// objet qui l'implémente sans pour autant contraindre le signataire 
// à une implémentation particulière. 

// Attention, Typescript accepte la description de propriétés publiques 
// via les interfaces, toutefois c'est une spécifié propre aux langages 
// démoniaques, il ne faut pas le faire car cela rompt, les principes 
// de tous les autres langages non démoniaques orientés par classe 
// (bouuuh Swift & Objective-C)

export default interface IHeroe{
    atk(opponent:IHeroe):void;
    get hp():number;
    set hp(value:number);
}