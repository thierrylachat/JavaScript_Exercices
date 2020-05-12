let angle = 0;
let square = document.querySelector('div');

function rotate() {
    angle = angle + 15;
    if (angle >= 360) {
        angle = 0;
    }
    square.style.transform = 'rotate('+ angle +'deg)';
    requestAnimationFrame(rotate);
}

window.addEventListener('load', () => {
    requestAnimationFrame(rotate);
});


/* 

La méthode window.requestAnimationFrame() notifie le navigateur que vous souhaitez exécuter 
une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation,
avant le prochain rafraîchissement du navigateur. 

Cette méthode prend comme argument un callback qui sera appelé avant le rafraîchissement du navigateur.

*/