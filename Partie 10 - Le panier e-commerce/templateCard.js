// Création des éléments de la boutique.

function getCard(article) {

    let containerCol = document.createElement('div');
    containerCol.classList.add('col-lg-4');
    let container = document.createElement('div');

    let name = document.createElement('h2');
    name.textContent = article.name;

    let description = document.createElement('p');
    description.textContent = article.description;

    let price = document.createElement('p');
    price.textContent = article.price;

    let add = document.createElement('button');
    add.setAttribute('class', 'btn btn-primary add');
    // setAttribute permet ici d'ajouter plusieurs classes au bouton.
    add.id = article.ref;
    // La propriété Element.id représente l'identifiant de l'élément, reflétant l'id global de l'attribut.
    add.textContent = 'Ajouter au panier';

    container.appendChild(name);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(add);

    containerCol.appendChild(container);

    return containerCol;
}