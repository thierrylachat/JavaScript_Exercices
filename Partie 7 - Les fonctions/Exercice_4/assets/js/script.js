// Sélection de l'image.
let img = document.querySelector('img');

// Création des fonctions fléchées.
let growthPicture = () => img.style.width = '100%';
let resetPicture = () => img.style.width = '50%';

// Ajout des évènements.
img.addEventListener('click', growthPicture);
img.addEventListener('dblclick', resetPicture);

// La fonction fléchée growthPicture équivaut à :
// function growthPicture() {
//     img.style.width = '100%';
// }