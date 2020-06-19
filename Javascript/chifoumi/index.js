'use strict';   // Mode strict du JavaScript

// Déclaration de variables
let computer;
let player;


// Récupération du choix du joueur.
player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');

// Conversion du choix du joueur en minuscules.
player = player.toLowerCase();


// Récupération d'un nombre aléatoire entre 0 inclu et 1 exclu.
const random = Math.random();

if(random < 1 / 3) {          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
    computer = 'pierre';
}
else if(random < 2 / 3) {    // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
    computer = 'feuille';
}
else {                       // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player) {
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else {
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(computer) {

        case 'ciseau':
        if(player == 'pierre') {
            document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
        }
        else { // player == 'feuille'
            document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
        }
        break;

        case 'feuille':
        if(player == 'pierre') {
            document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
        }
        else { // player == 'ciseau'
            document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
        }
        break;

        case 'pierre':
        if(player == 'feuille') {
            document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
        }
        else { // player == 'ciseau'
            document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
        }
        break;
    }
}

//correction version 2 

let choix1 = 'pierre';
let choix2= 'feuille';
let choix3 = 'ciseau';
//Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.
//.toUpperCase
let choixjoueur = prompt('Entrez: pierre, feuille ou ciseau').toLowerCase();
let ordinateur = Math.random();

const index = Math.floor(Math.random() * 3);

const choix = ['feuille', 'pierre', 'ciseaux'];

let choixOrdinateur = choix[index];

// une solution.
if (ordinateur < (1 / 3)) {
    ordinateur = "pierre";
} else if(ordinateur <= (2 / 3)) {
    ordinateur = "feuille";
} else {
    ordinateur = "ciseau";
}


console.log(ordinateur);
console.log(choixjoueur);


//Si le joueur et l'ordinateur font le même choix on obtient une égalité.
if(choixjoueur === ordinateur) {
    console.log ("égalité!");
}
//Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
if (choixjoueur === choix1 && ordinateur === choix3) {
    console.log("gagné!");
}

if (choixjoueur === choix3 && ordinateur === choix1) {
    console.log("perdu!");
}

//La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd)
if (choixjoueur === choix3 && ordinateur === choix2) {
    console.log("gagné!");
}

if (choixjoueur === choix2 && ordinateur === choix3) {
    console.log("perdu!");
}

//La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
if (choixjoueur === choix2 && ordinateur === choix1) {
    console.log("gagné!");
}

if (choixjoueur === choix1 && ordinateur === choix2) {
    console.log("perdu!");
}