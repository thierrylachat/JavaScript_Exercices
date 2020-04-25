// Première solution. //

let number = prompt ("Merci de renseigner une note comprise entre 0 et 10 svp.");

if (0 <= number && number <= 3) {
    alert(`Nul`);
} else if (4 <= number && number <= 6) {
    alert (`Moyen`);
} else if (6 < number && number < 8) {
    alert (`Assez bien`);
} else if (8 <= number && number <= 9) {
    alert (`Bien`);
} else if (number == 10) {
    alert (`Excellent`);
}


// Deuxième solution. //

let number = prompt('Saisir un nombre ?');

// On vérifie qu'il y a une saisie et que la valeur renseignée est un nombre. //
if (number && !isNaN (number)) {
    if (number == 10){
        alert ('Excellent !');
    } else if (number > 7) {
        alert ('Bien');
    } else if (number > 5) {
        alert ('Assez bien');
    } else if (number > 3) {
        alert ('Moyen')
    } else {
        alert ('Nul')
    }
}
