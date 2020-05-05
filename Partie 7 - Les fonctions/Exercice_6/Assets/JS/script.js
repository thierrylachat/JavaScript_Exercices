// Identification de la fonction fléchée à transformer en fonction nommée.
(name) => {
    `Bonjour, ${name} ! Comment vas-tu ?`;
};


// FONCTION FLECHEE 1.
let sayHello = name => {
    `Bonjour, ${name} ! Comment vas-tu ?`;  
};


// FONCTION NOMMEE 1.
let sayHello = function(name) {
    `Bonjour, ${name} ! Comment vas-tu ?`;
};


// FONCTION NOMMEE 2.
function sayHello(name) {
    `Bonjour, ${name} ! Comment vas-tu ?`;
}


/* Il n'y a pas besoin de ; à la fin de "function".
Par contre le ; est obligatoire dans les autres cas. */
