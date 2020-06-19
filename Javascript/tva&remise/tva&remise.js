//Énoncé

//L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.
//Détails

    // L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
    // La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
   // Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
    // S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
    // Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final. 




const tva = 20.0;
let prixHT = "";

   // boucle:
do { 
prixHT = parseFloat(prompt("merci de saisir le prix HT"));
  } while(isNaN(prixHT));
  
  // boucle prompt jusqu'a ce que l'utilisateur rentre un nombre.

const reduction = prompt("avez-vous un coupon de réduction?").toLowerCase();



 
// "string".toLowerCase(); mettre automatiquement en minuscule.
// "string".toUpperCase(); mettre automatiquement en majuscule.
       

if(reduction === "oui" || reduction === "yes") {
    const remise = parseFloat(prompt("Entrer le pourcentage de réduction"));
    
// si l'utilisateur rentre pas un nombre
     //if(isNaN(prixHT)) {
    //console.error('erreur');
// message d'erreur dans la console.
    
    let montantRemise = (prixHT * remise) / 100;
    
    prixHT = prixHT - montantRemise;
    
   document.write("<p>voici votre montant de la remise : " + montantRemise  + "</p>");
   
   document.write("<p>voici le prix HT aprés remise: " + prixHT + "</p>");
    
} else {
    document.write("<p>Aucune remise n'a été appliquée</p>");
}

    

const montantTTC = prompt("souhaitez-vous connaitre le montant TTC?");



const montantTVA = (prixHT * tva) / 100;







document.write("<p> voici le montant TTC : " + montantTTC + "</p>");











