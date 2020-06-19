'use strict';



/*Enoncé

Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.
Détails

    On peut saisir un nombre entier comme un nombre à virgule.*/
    
    let result;
    
    do {
    
    result = parseFloat(window.prompt('merci de saisir obligatoirement un chiffre :'));
    
}
while(isNaN(result));

document.write(result);
