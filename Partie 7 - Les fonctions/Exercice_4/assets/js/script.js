let number1 = document.getElementById('input_1');
let number2 = document.getElementById('input_2');
let product = number1 * number2;

function multiply(number1, number2) {
  return product;
};

document.getElementsByTagName('button').addEventListener('click', multiply() {
  document.getElementById('product').textContent = product;
});