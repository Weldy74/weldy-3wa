const TAUX_DE_TVA = 20.0;

const prixHT = parseFloat(prompt('quelle est le montant HT?'));

const montantTVA = prixHT * TAUX_DE_TVA / 100;

console.log(montantTVA);

const montantTTC = prixHT + montantTVA;

document.write('votre montant TTC'  +     montantTTC    +  'le montant TVA' +  montantTVA  +  'le taux de TVA' +  TAUX_DE_TVA );

// corrigé exercice :

//- 1 j'ai ça
// const TVA = 20.0;

// -2 QQchose se passe
//const prixHT = parseFloat(prompt('Quelle est le montant HT ?'));
// L'utilisateur saisit un montant HT
// Attention au type de la donnée renvoyé par window.prompt() !
// Le montant HT est un nombre à virgule (on peut saisir des centimes).


//const montantTva = (prixHT * TVA) / 100;



//const montantTTC = prixHT + montantTva;
// -3 J'affiche le resultat.

// Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
//document.write('Votre montant TTC ' + montantTTC + ' montant HT ' + prixHT + ' Taux de TVA: ' + TVA);


//document.write(`Votre montant TTC ${montantTTC}  montant HT ${prixHT} Taux de TVA:  ${TVA}`);

'use strict';   // Mode strict du JavaScript

// Déclaration d'une constante pour stocker le taux de TVA
const Tva = 20.0;

// Déclaration de trois variables.
let montantHT;
let montantTTC;
let montantTVA;


// Demande le montant HT à l'utilisateur.
montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);

/*
 * Les deux lignes du dessus peuvent être réduites également en une seule :
 * montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
 *
 * Le code se lit et s'exécute de l'intérieur des parenthèses vers l'extérieur.
 */


// Calcul du montant de TVA et du montant TTC final.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');



//
// Bonus : demander également le taux de TVA à l'utilisateur (ce n'est plus une constante).
//



// -1: j'ai des données
// -2: Quelque chose se passe
// -3: J'affiche les données