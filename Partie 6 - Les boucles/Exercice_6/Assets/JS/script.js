// let firstNumber = Math.floor(Math.random()*10) + 1;
// let secondNumber = Math.floor(Math.random()*10) + 1;

// while (firstNumber / secondNumber > 1) {
//   firstNumber /= secondNumber;
//   console.log(firstNumber);
// }

// SOLUTION 2.

let firstNumber = Math.floor(Math.random()*10 + 1);
let secondNumber = Math.floor(Math.random()*10 + 1);

do {
  firstNumber /= secondNumber;
  if(firstNumber < 1){
    break;
  }
  console.log(firstNumber);
} while(true);