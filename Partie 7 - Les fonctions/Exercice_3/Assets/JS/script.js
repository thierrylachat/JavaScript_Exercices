let multi = (firstNumber, secondNumber) => firstNumber * secondNumber;

document.querySelector('#result').addEventListener('click', function () {
    let firstNumber = document.querySelector('#input_1').value;
    let secondNumber = document.querySelector('#input_2').value;
    document.querySelector('#label').textContent = multi(firstNumber, secondNumber);
});