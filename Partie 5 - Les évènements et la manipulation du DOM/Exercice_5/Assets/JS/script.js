// Détermination de la fonction qui permet de changer la couleur du paragraphe.
function changeColor() {
  // Récupération de l'id de l'élément déclencheur de la fonction.
  let color = this.id;
  document.querySelector('p').style.color = color;
}

// Détermination de la fonction qui permet de changer la police de texte.
function changeFont() {
  // Récupération de l'id de l'élément déclencheur de la fonction.
  let font = this.id;
  // On teste le type de modification à faire sur le texte.
  if(font == 'bold'){
    document.querySelector('p').style.fontWeight = font;
  } else {
    document.querySelector('p').style.fontStyle = font;
  }
}

// Renvoi d'un table contenant les boutons ayant l'id color.
let buttonsColorList = document.querySelectorAll('.color');
buttonsColorList.forEach(function(button){
  button.addEventListener('click', changeColor);
});

//Renvoi d'un table contenant les boutons ayant l'id font.
let buttonsStyleList = document.querySelectorAll('.font');
buttonsStyleList.forEach(function(button){
  button.addEventListener('click', changeFont);
});
