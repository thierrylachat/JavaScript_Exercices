// SOLUTION 1
let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let x;

for (x of languages) {
    document.write(x + ' ');
}



// SOLUTION 2

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

// Utlisation de la boucle for.
for(i = 0; i < length; i++) {
    let p = document.createElement('p');
    p.textContent = languages[i];
    div.appendChild(p);
}

// Insertion dans le DOM une fois la boucle effectuée.
document.querySelector('body').insertAdjacentElement('afterbegin', div);



// SOLUTION 3

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

// Utilisation de la méthode forEach pour parcourir le tableau.
languages.forEach(function(language) {
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);



// SOLUTION 4

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

// Utilisation de la méthode map des array.
languages.map(function(language) {
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);