// fonction déclarée normalement
function calculerAireRectangle( longueur:number, largeur:number):number{
    return longueur * largeur;
}

// fonction anonyme stockée dans une constante
const pythagore = function(coteA:number, coteB:number ):number{
    return Math.sqrt( coteA * coteA + coteB * coteB );
}; 


// fonction fléchée, par nature anonyme, stockée dans une variable
var degToRadian = (degree:number)=>{
    return degree * Math.PI / 180
}


// les trois sont exportées et seront accessibles de la même façon.
export {
    calculerAireRectangle, 
    pythagore, 
    degToRadian
}