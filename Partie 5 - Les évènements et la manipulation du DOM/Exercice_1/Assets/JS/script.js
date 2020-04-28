function myFunction(){

  let password_input = document.getElementById("password");
  let confirmation_password_input = document.getElementById("password_confirmation");

  if (password_input.value === confirmation_password_input.value) {
    password_input.style.borderColor = "green";
    confirmation_password_input.style.borderColor = "green";

  } else {
    password_input.style.borderColor = "red";
    confirmation_password_input.style.borderColor = "red";
  }
}
