let REGEX_name = /^[A-Z][a-zéèç]+(?:(?:\s|\-)[A-Z][a-zéèç]+)$/;
let REGEX_email = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;
let REGEX_age = /^[0-9]{1,3}$/;
// Autre proposition pour le REGEX email :
//let REGEX_email = /^\w+([\.-]\w+)*\@\w+\.[a-z]{2,6}$/;

function checkField(input, REGEX) {                 
  let value = input.value; 
  // Si le texte renseigné ne matche pas avec la REGEX :
  if (!REGEX.test(value)) {
    // Création de la balise <p>.                  
    let p = document.createElement('p');
    // Ajout d'un attribut class à p.
    p.setAttribute('class','danger');              
    // Ajout du contenu du texte de p.
    p.textContent = "La saisie est incorrecte !";
    //On insert le p après le input.
    input.insertAdjacentElement ('afterend', p);
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
