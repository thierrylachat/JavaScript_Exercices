//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  return sentence.replace("debugger","d bugger");
  // 2° solution : return sentence.replace('e',' '); //
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  return sentence.slice(4,5);
  // 2° solution : sentence.charAt(4); //
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  return sentence.slice(0,9);
  // 2° solution : sentence.substring(0,9); //
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
  return typeof sentence == 'string';
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  return fileName.slice(15,18);
  //2° solution : fileName.split('.').pop();//
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
//2° solution : sentence.includes('la Manu');

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numberArray) {
  return numberArray.map(Math.abs);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round(Math.PI*Math.pow(radius,2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return Math.floor(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
}
