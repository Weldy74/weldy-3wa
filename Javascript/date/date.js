
const aujourdhui = new Date();

const day = aujourdhui.getDay();

const jour = aujourdhui.getDate();

const mouth = aujourdhui.getMonth();

const year = aujourdhui.getFullYear();

// sunday - saturday : 0 - 6

const days = ["dimanche", "lundi","mardi", "mercredi", "jeudi", "vendredi", "samedi"] ;

// January - December : 0 - 11

const mouths = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

console.log(mouths[mouth], days[day], jour, year);



