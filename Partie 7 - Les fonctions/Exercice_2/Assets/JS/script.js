// Mise en gras du texte.

function setBold() {
    document.querySelector('body').style.fontWeight = 'bold';
}

let boldButton = document.getElementById('bold');
boldButton.addEventListener('click', setBold);


// Changement de couleur du texte.

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('body').style.color = '#' + randomColor;
}

let colorButton = document.getElementById('color');
colorButton.addEventListener('click', changeColor);


// Agrandissement du texte.

function growth() {
    document.querySelector('body').style.fontSize = '20px';
}

let sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', growth);