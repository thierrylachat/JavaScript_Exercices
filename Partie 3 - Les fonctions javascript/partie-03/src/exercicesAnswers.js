//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  return sentence.replace("debugger","d bugger");
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  return sentence.slice(4,5);
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  return sentence.slice(0,9);
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  return sentence.toUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  return sentence.toLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  return sentence.trim();
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  return true;
  if (typeof(sentence) == string) {
    console.log (true);
  }
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  return fileName.slice(15,18);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  return sentence.split(' ').length - 1;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  return sentence.split('').reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  return true;
  if (sentence.search("La Manu") == !isNaN) {
    console.log (true);
  }
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return 'A compléter';
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  return 'A compléter';
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return 'A compléter';
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return 'A compléter';
}