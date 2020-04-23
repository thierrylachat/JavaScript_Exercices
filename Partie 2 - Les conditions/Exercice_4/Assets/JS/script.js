let number = parseInt(prompt ("Merci de renseigner une note comprise entre 0 et 10 svp."));

if (0 <= number && number <= 3) {
    alert(`Nul`);
} else if (4 <= number && number <= 6) {
    alert (`Moyen`);
} else if (6 < number && number < 8) {
    alert (`Assez bien`);
} else if (8 <= number && number <= 9) {
    alert (`Bien`);
} else if (number = 10) {
    alert (`Excellent`);
}

