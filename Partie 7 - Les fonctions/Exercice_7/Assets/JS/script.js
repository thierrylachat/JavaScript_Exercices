function sum(firstNumber, secondNumber) {
    return Number(firstNumber) + Number(secondNumber);
}

function soustraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

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
        default:
            return 'Error';
    }
}

document.querySelector('#result').addEventListener('click', function () {
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let operator = document.querySelector('input:checked').value;
    document.querySelector('#label').textContent = calc(firstNumber, secondNumber, operator);
});