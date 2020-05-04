// Tirage d'un nombre aléatoire entre 1 et 10.
let firstNumber = Math.floor(Math.random()*10) + 1;
let secondNumber = Math.floor(Math.random()*10) + 1;

while (firstNumber * secondNumber < 250) {
  //L'expression suivante est égale à : secondNumber = secondNumber * firstNumber;
  secondNumber *= firstNumber;
  console.log(secondNumber);
}