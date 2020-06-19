/*S1.4 - Liste de Courses
Enoncé

Gérer une liste de courses en affichant les informations dans la console du navigateur web.
Détails

    La liste de courses est stockée dans une seule variable.
    Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
    Les fonctionnalités de gestion de la liste de courses sont :
        Ajouter un produit par son nom
        Supprimer un produit ayant un nom spécifique
        Supprimer tous les produits
        Afficher la taille et le contenu de la liste
    Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
    Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
    Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
        Ajouter 4 produits simples puis afficher les informations
        Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
        Supprimer tous les produits puis afficher les informations */
        
        
    let listeDeCourses = ['melon','orange', 'viande', 'fromage','sopalin', 'yaourt'];
    
// Ajouter un produit par son nom
function ajouterUnProduitALaListe(produit) {
    listeDeCourses.push(produit);
}

ajouterUnProduitALaListe('pommes');


//         Supprimer un produit ayant un nom spécifique

//         Supprimer tous les produits
//function supprimerTousLesProduitsDeLaListe() {
    //listeDeCourses.length = 0;    
//}

// supprimerTousLesProduitsDeLaListe();


/// Afficher la taille et le contenu de la liste <ul>

document.write('<ul>');

function tailleListeDeCourse() {
    
    return listeDeCourses.length;
}

document.write(`<li>La taille de la liste : ${listeDeCourses.length}.</li>`);


function contenuDeLaListe() {
    
    return listeDeCourses;
}

document.write(`<li>Le contenu de la liste : ${listeDeCourses}.</li>`);

document.write('</ul>');


//     Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.







//Les tableaux sont des objets de la classe Array, 
// s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités

//Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations


// liste de course correction : 

//La liste de courses est stockée dans une seule variable.
let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];

// Ajouter un produit par son nom
function ajouterUnProduitALaListe(liste, produit) {
    liste.push(produit);
}

ajouterUnProduitALaListe(listeDeCourses, 'pommes');


if(confirm('Souhaitez vous effacer un produit')) {
    let produit = prompt('Entrez le nom du produit');
    
    
    supprimerUnSeulProduit(produit, listeDeCourses);
}


//         Supprimer un produit ayant un nom spécifique
function supprimerUnSeulProduit(produit, liste) {
    
    // trouver index du produit a supprimer
    let index = liste.indexOf(produit);
    
    // Si l'article a supprimer != 0 ou > 0
    if(index >= 0) {
        // Supprimer le produit grace a son index
        return liste.splice(index, 1);
    }
    
    return document.write('L\'article n\'existe pas');
    
}

supprimerUnSeulProduit('bananes', listeDeCourses);

//         Supprimer tous les produits
function supprimerTousLesProduitsDeLaListe(liste) {
    liste.length = 0;    
}

// supprimerTousLesProduitsDeLaListe(listeDeCourses);


/// Afficher la taille  
function afficherTailleListe(liste) {
    return liste.length;
}


//Afficher le contenu de la liste <ul>
function afficherProduitsDeLaListe(liste) {
    // creer ul
    
    for(let produit of liste) {
        document.write(`<li>${produit}</li>`);
    }
    
    //fermer ul
}

afficherProduitsDeLaListe(listeDeCourses);


//     Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.







//Les tableaux sont des objets de la classe Array, 
// s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités

//Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations

