// Création d'une fonction pour modifier la taille de la police.

function setFontSize() {

  // Sélection de l'élément que l'on souhaite modifier.
  let body = document.querySelector('body');

  // Récupération de la taille actuelle de la police.
  let size = parseInt(getComputedStyle(body).fontSize);

  // Incrémentation de la taille.
  size += 1
  // size ++
  // size = size + 1

  // MAJ de la police avec la nouvelle taille.
  body.style.fontSize = size + 'px';

} 

// Ecoute de l'évènement pour appeler la fonction.

window.addEventListener('scroll', setFontSize);