function myFunction(){

  let password_input = document.getElementById("password");
  let confirmation_password_input = document.getElementById("password_confirmation");

  if (password_input.value == confirmation_password_input.value) {
    password_input.setAttribute('class', 'form-control-success');
    confirmation_password_input.setAttribute('class', 'form-control-success');
  } else {
    password_input.setAttribute('class', 'form-control-fail');
    confirmation_password_input.setAttribute('class', 'form-control-fail');
  }

}
