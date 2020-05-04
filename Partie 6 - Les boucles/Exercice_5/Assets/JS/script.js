
//   SOLUTION NON OK
//   if ((1 <= firstNumber <= 10) && (1 <= secondNumber <= 10)) {
  
//   let thirdNumber = firstNumber * secondNumber; 
//   let firstNumber = 1;
//   let secondNumber = 1;

//   while (thirdNumber < 250) {
//     console.log(thirdNumber);
//     firstNumber++;
//     secondNumber++; 
//   }
// }



// SOLUTION NON OK.
// let firstNumber;
// let secondNumber;

// for (firstNumber = 1; firstNumber <= 10; firstNumber ++) {
//   console.log(firstNumber);
// }
// for (secondNumber = 1; secondNumber <= 10; secondNumber ++) {
//   console.log(firstNumber);
// }

// let result = firstNumber * secondNumber;

// while (result < 250) {
//   console.log(result);
//   secondNumber = result;
// }



// SOLUTION 3.
let firstNumber = Math.floor(Math.random()*10) + 1;
let secondNumber = Math.floor(Math.random()*10) + 1;

while (firstNumber * secondNumber < 250) {
  //secondNumber = secondNumber * firstNumber;
  secondNumber *= firstNumber;
  console.log(secondNumber);
}