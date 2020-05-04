let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let div = document.createElement('div');

// Création d'une boucle forEach() pour parcourir le tableau.
days.forEach(function(day) {
    let p = document.createElement('p');
    p.textContent = day;
    // Conversion du texte en majuscule ou en minuscule afin de comparer des valeurs comparables.
    if(day.toLowerCase() === 'samedi' || day.toLowerCase() === 'dimanche') {
        p.style.fontWeight = 'bold';
    }
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);