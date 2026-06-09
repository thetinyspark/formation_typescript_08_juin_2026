import { env } from "../env";

// décorateur de fonction/méthode
export default function LogMethodCall(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {

    // descriptor.value représente la fonction décorée
    const func = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // ici on écrit dans le journal quelle utilisation 
        // a été faite de la méthode et avec quels paramètres
        if( env.isProduction){
            console.log(`Appel de ${propertyKey} avec`, args);
        }

        // on retourne le résultat de l'éxécution de la fonction
        return func.apply(this, args);
    };
}
