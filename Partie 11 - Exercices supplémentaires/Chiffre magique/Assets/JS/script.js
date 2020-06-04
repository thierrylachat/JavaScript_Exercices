let mysteryNumber = 10;

do {
    let number = prompt('Renseignez un nombre entier.');

    if (mysteryNumber < number) {
        alert('Plus petit !');
    } else if (mysteryNumber > number) {
        alert('Plus grand !');
    } else {
        alert('Bien joué !');
        break
    }

} while (true);