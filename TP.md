TP n°12

De la même façon que l'on a crée un SayanInitProperties, créez un ArenaInitProperties
avec les éléments suivants: 

{
    heroes: IHeroe[] // tableau de héros fournis à l'arène dès son initialisation
}

Ce paramètre de type ArenaInitProperties, doit être utilisé dans la builder function 
et pris en charge par AccorArena et Colosseum. 

Vous pouvez ajouter une méthode getHeroes aux deux arènes afin de tester
si oui ou non, après leur création, elles ont récupérés les héros contenus
dans leur paramètre. 