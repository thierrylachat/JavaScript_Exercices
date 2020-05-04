let tbody = document.querySelector('tbody');

// Création de la boucle.
for (year = 2020; year <= 2030; year++) {

  // Création de la ligne.
  let tr = document.createElement('tr');

  // Création de la cellule.
  let td = document.createElement('td');

  // Insertion de la date dans la cellule.
  td.textContent = year;

  // Recherche et affichage des années bissextiles.
  if ((year % 400 == 0) || ((year % 4 == 0) && !(year % 100 == 0))) {
    td.style.color = 'white';
    td.style.backgroundColor = 'IndianRed';
  }

  // Insertion de la cellule dans une ligne.
  tr.appendChild(td);

  // Insertion de la ligne dans le tableau.
  tbody.appendChild(tr);

}