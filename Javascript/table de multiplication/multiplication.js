/*JS1.3 - Table des Multiplications
Énoncé

Construire une table des multiplications en JavaScript puis l'afficher en HTML.
Détails

    Demander à l'utilisateur de saisir la taille de la table des multiplications (exemple : si on saisit 10 il faut faire une table de 1 à 10).
    Il faut utiliser les balises HTML de tableaux pour construire l'affichage.
    Pour l'affichage, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.), la cellule du tableau HTML doit s'afficher d'une autre couleur que les autres cellules. La solution doit être en CSS.

Rappels

    Rien de mieux qu'une boucle pour initialiser un tableau...*/
    
let number= '';

do {

number =parseFloat(prompt('Entrez un nombre'));}

while (isNaN(number));

document.write('<table>');


for(let i = 1; i <= number; i++) {
    
    // console.log(i);
    
    document.write('<tr>');
    
    
    for(let j = 1; j <= number; j++) {
        
        // Si le nombre est un multiple de lui meme
        //      Affichage dun td special
        // Sinon 
        //     Affichage dun td normal
      if (i===j) {
          document.write('<td class="luimeme">');
          
      }
      
      else {
          document.write('<td>');
      }
        
        document.write( i * j);
        
       
        document.write('</td>');
    }
    
    document.write('</tr>');
    

}

document.write('</table>');
        

