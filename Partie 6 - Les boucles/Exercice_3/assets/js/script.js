// SOLUTION 1 OK
let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let x;

for (x of languages) {
    document.write(x + ' ');
}



// SOLUTION 2 NOK
// let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
// let p = document.createElement('p');
// let body = document.createElement('body');
// let i = 0;
// let text = '';

// for (;languages[i];) {
//     text += languages[i] + ' ';
//     i++;
//     p.textContent = text;
//     body.appendChild(p);
// }



//SOLUTION 3 NOK
// let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
// let p = document.createElement('p');
// let body = document.createElement('body');
// let i = 0;
// let text = '';

// while (languages[i]) {
//     text += languages[i] + ' ';
//     i++;
//     p.textContent = text;
//     body.appendChild(p);
// }



// SOLUTION 4

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

for(i = 0; i < length; i++) {
    let p = document.createElement('p');
    p.textContent = languages[i];
    div.appendChild(p);
}

// Insertion dans le DOM une fois la boucle effectuée.
document.querySelector('body').insertAdjacentElement('afterbegin', div);



// SOLUTION 5

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

languages.forEach(function(language) {
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);



// SOLUTION 6

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let length = languages.length;
let div = document.createElement('div');

languages.map(function(language) {
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);