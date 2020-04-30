// Sources des images :
// https://www.w3schools.com/js/pic_bulboff.gif
// https://www.w3schools.com/js/pic_bulbon.gif


// Sélection de la balise img via son sélecteur css.
let img = document.querySelector('img');


// Rattachement d'un évènement à l'élément html img.
img.addEventListener('click', function(){
  //This fait référence à l'objet courant, en l'occurence l'img qui a été cliquée.
  this.src = "https:www.w3schools.com/js/pic_bulbon.gif";
  this.setAttribute(alt, Ampoule éteinte));
}
