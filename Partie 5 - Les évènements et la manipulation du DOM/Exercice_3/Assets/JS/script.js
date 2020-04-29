function myFunction(){


  let name_input = document.getElementById("name");
  let REGEX_name = /^[a-zéèç]+$/i; /^([a-z]+)([a-z ]+)$/i
 
  if (!REGEX_name.test(name_input)) {
    alert ("Nom non valide.");
  }


  let email_input = document.getElementById("email");
  let REGEX_email = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;
 
  if (!REGEX_email.test(email_input)) {
    alert ("Adresse mail non valide.");
  }


  let age_input = document.getElementById("age");
  let REGEX_age = /^[0-9]{1,3}$/;
 
  if (!REGEX_age.test(age_input)) {
    alert ("Âge non valide.");
  }


}



