// Déterminiation de la fonction qui permet de scroller en haut de l'élément.
function scrollSections () {
    let section = document.getElementById('fable2');
    section.scrollIntoView(
        {block: 'start',
        behavior: 'smooth',
    });
};


// Détermination d'une table avec les links de la barre de nav.
let fableLinks = document.querySelectorAll('.nav-link');
fableLinks.forEach(function(link){
    link.addEventListener('click', scrollSections);
});
