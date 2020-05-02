function onFocus() {
  this.style.border = '2px solid black';
}

function focusOut() {
  this.style.border = '';
}

let input = document.querySelectorAll('input');

input.forEach(function(input){
  input.addEventListener('focus', onFocus);
  input.addEventListener('blur', focusOut);
});
