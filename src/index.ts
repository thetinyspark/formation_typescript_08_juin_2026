import Arena from "./arena/Arena";
import Mage from "./Mage";


// avec l'emploi de la fonction statique getInstance
// décrite sur la classe Arena, je suis certain de toujours
// obtenir le même objet de type Arena / la même instance de Arena

// le pattern singleton permet de gérer efficacement le stockage 
// et l'accès à une seule et unique instance d'une même classe

// TOUTEFOIS: C'est un anti pattern
// ça brise le principe SOLID
Arena.getInstance().addHeroe( new Mage("merlin", 20, 100));
