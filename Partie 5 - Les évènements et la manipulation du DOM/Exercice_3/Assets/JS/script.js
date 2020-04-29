let REGEX_name = /^[A-Z][a-zéèç]+(?:(?:\s|\-)[A-Z][a-zéèç]+)$/;
let REGEX_email = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;
let REGEX_age = /^[0-9]{1,3}$/;
// Autre proposition pour le REGEX email :
//let REGEX_email = /^\w+([\.-]\w+)*\@\w+\.[a-z]{2,6}$/;

function checkField(input, REGEX) {                 // ?Création checkfield? //
  let value = input.value; 
  // Si le texte renseigné ne matche pas avec la REGEX :
  If (!REGEX.test(value)) {
    // Création de la balise <span>                 // ?Pourquoi pas de <span> dans le html? //
    let span = document.createElement('span');
    // Ajout d'un attribut class à span
    span.setAttribute('class','danger');            // ?class? //
    // Ajout du contenu du texte de span
    span.textContent = "La saisie est incorrecte !";
    //On insert le span après le input
    input.insertAdjacentElement ('afterend', span);
  }
}

// On sélectionne l'élément input.
let name = document.getElementById('name');
name.addEventListener('blur', function() {
  checkField(name, REGEX_name);
});

let age = document.getElementById('age');
age.addEventListener('blur', function() {
  checkField(age, REGEX_age);
});

let email = document.getElementById('email');
email.addEventListener('blur', function() {
  checkField(email, REGEX_email);
});
