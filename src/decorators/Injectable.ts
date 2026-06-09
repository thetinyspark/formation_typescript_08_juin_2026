import rootContainer from "../ioc/ContainerIoC";

// le type constructable est composé de la sorte 
// il nous dit que le constructeur qui est passé en paramètre est une fonction
// qui doit pouvoir être préfixée du mot clé 'new'. 
// Elle prévoit également que ce constructeur puisse recevoir une infinité 
// de paramètres '...args:any[]'. 
// on ajoute de la générécité à tout cela, histoire de pouvoir retourner 
// un type précis avec <T>
type Constructable<T> = { new (...args: any[]): T };

// ici on définit un type de données précis permettant 
// de référencer correctement notre classe auprès de l'injecteur de dépendances.
type InjectProperties = {key:string, isSingleton:boolean};

// les décorateurs de classe prennent des constructeurs en paramètre
// ici, nous référençons le constructeur à l'aide d'une clé au sein
// de notre injecteur de dépendances. 
export function Injectable<T>(config:InjectProperties){
    return function(constructor: Constructable<T> ){

        // ici on construit notre factory function (builder)
        // à la volée et on la référence auprès de notre rootContainer
        const builder = (...params:any[])=>{
            return new constructor(...params);
        }; 

        // rootContainer est l'instance unique de ContainerIoC exportée
        // depuis le module du même nom.
        const container = rootContainer;

        // on ajoute le builder à notre injecteur de dépedances, 
        // on lui associe la clé (string) et le fait que cette 
        // instance doit être unique ou non (singleton)
        container.addBuilder(config.key, builder, config.isSingleton);
    };
}