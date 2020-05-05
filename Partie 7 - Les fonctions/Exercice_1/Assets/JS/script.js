function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

document.querySelector('#result').addEventListener('click', function () {
    let firstNumber = document.querySelector('#input_1').value;
    let secondNumber = document.querySelector('#input_2').value;
    document.querySelector('#label').textContent = multiply(firstNumber, secondNumber);
});