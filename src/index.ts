

// mon objet ici, va occuper une certaine adresse en mémoire
// MAIS on est en javascript, donc cet objet est mouvant par nature
// TANT QUE l'adresse en mémoire qui donne accès à l'objet ne 
// change pas, c'est ok pour Javascript, même si le contenu 
// de l'objet en lui-même change 
const profil:any = {
    name: "Nicolas", 
    age: 40
};


profil.name = "Cyril";
profil.age = 44;

// console.log(profil);


function displayMyAge(show:boolean){
    
    if( show === true ){
        // le mot clé let se limite à une portée locale
        var age:number = 40; // var permet une portée globale
    }
    
    console.log(age);
}

displayMyAge(true);





