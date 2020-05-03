let p = document.createElement('p');

// Création de la boucle.
for(i = 0; i <= 100; i++) {

  // Création d'une variable temoraire pour éviter d'écraser le compteur.
  let number = i;

  // Création du span.
  let span = document.createElement('span');

  // Création du compteur multiple de 15 et modification de la variable temporaire.
  if (i % 15 === 0) {
    number = '...';
  }

  // Insertion du texte dans le span.
  span.textContent = number;

  // Insertion du span dans le p.
  p.appendChild(span);

}

// Insertion du p après le h1.
document.querySelector('h1').insertAdjacentElement('afterend', p);