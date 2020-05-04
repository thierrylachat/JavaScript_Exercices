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