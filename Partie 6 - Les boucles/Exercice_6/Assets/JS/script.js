// Tirage d'un nombre aléatoire entre 1 et 10.
let firstNumber = Math.floor(Math.random()*10 + 1);
let secondNumber = Math.floor(Math.random()*10 + 1);

do {
  //L'expression suivante est égale à : firstNumber = firstNumber * secondNumber;
  firstNumber /= secondNumber;
  if (firstNumber < 1) {
    break;
  }
  console.log(firstNumber);
} while (true);