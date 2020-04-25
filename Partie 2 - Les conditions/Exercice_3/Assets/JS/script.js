let number = prompt ("Merci d'indiquer un nombre svp.");

// On vérifie qu'il y a une saisie et que la valeur renseignée est un nombre.//
if (number && !isNaN (number)) {
    if (number %2 == 0) {
        alert (`Le nombre est pair.`);
    } else {
        alert (`Le nombre est impair.`);
    }
} else { 
    alert ('Merci de renseigner un nombre valide.');
}
