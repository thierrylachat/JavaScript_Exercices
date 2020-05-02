// Déclaration de la fonction clone.
function cloneElements() {

  // Affichage de l'élément conteneur du bouton qui déclenche la fonction.
  let parent = this.parentNode;

  // Clonage du parent. L'argument true permet de cloner les enfants.
  let parentClone = parent.cloneNode(true);

  // Insertion du clone dans le DOM.
  parent.insertAdjacentElement('afterend', parentClone);

}

document.querySelector('button').addEventListener('click', cloneElements);