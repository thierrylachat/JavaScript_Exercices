function onFocus() {
  this.style.border = '2px solid black';
}

function focusOut() {
  this.style.border = '';
}

let input = document.querySelector('.form-control');

input.addEventListener('focus', onFocus);
input.addEventListener('blur', focusOut);