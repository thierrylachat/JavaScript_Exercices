let allPara = document.querySelectorAll('p');

window.addEventListener('load', function () {
    allPara.forEach(function (para) {
        para.classList.add('hidden');
        // On appelle fadein pour afficher les p déjà postionnés dans la partie visible de la page.
        fadein();
    })
});

// Vérifie si élément dans partie visible page.

function inFrontPage(para) {

    // Renvoie la hauteur de la fenêtre.
    let windowH = window.innerHeight;

    // Mesure l'écart entre le haut du bloc et le bord sup gauche de la fenêtre.
    let paraPos = para.getBoundingClientRect().top;

    // Vérifie que l'élément est dans la partie visible de la page.
    return paraPos - windowH <= 0;
}

function fadein() {
    for (para of allPara) {
        if (inFrontPage(para)) {
            para.className = para.className.replace('hidden', 'fadein');
        } else {
            para.className = para.className.replace('fadein', 'hidden');
        }
    }
}

// Animation.

window.addEventListener('scroll', fadein);