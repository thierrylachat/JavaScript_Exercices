let firstNumber = Math.floor(Math.random()*10) + 1;
let secondNumber = Math.floor(Math.random()*10) + 1;

while (firstNumber / secondNumber > 1) {
  //secondNumber = secondNumber * firstNumber;
  firstNumber /= secondNumber;
  console.log(firstNumber);
}