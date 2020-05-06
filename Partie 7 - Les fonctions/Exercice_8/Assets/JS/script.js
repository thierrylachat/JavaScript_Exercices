let sum;

// sum = function(firstNumber, secondNumber){
//     return Number(firstNumber) + Number(secondNumber);
// }

sum = (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber);


// bonus

let square = number => number * number;


// bonus
// function sum(firstNumber, secondNumber){
//     return Number(firstNumber) + Number(secondNumber);
// }

soustraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

division = (firstNumber, secondNumber) => firstNumber / secondNumber;


function calc(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
        return sum(firstNumber, secondNumber);
        case '-':
        return soustraction(firstNumber, secondNumber);
        case '*':
        return multiply(firstNumber, secondNumber);
        case '/':
        return division(firstNumber, secondNumber);
        case '^':
        return square(firstNumber);
        default:
        return 'Error';
    }
}

document.querySelector('#result').addEventListener('click', () => {
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let operator = document.querySelector('input:checked').value;
    document.querySelector('#label').textContent = calc(firstNumber, secondNumber, operator);
});