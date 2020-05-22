/*
L'évènement DOMContentLoaded est déclenché quand le document HTML initial est 
complètement chargé et analysé, sans attendre la fin du chargement des feuilles de styles, images et sous-documents.
*/
document.addEventListener('DOMContentLoaded', function () {
    let cart = [];

    // Affichage des produits.
    let row = document.createElement('div');
    row.setAttribute('class', 'wrap row');
    articles.forEach(function (article) {
        row.appendChild(getCard(article));
    });

    // Insertion des lignes de produits dans la page (cf. ligne 17 HTML).
    document.querySelector('.container').appendChild(row);

    // Affichage du contenu du panier (cf. ligne 28 HTML).
    let cartContent = document.querySelector('.cart-content');
    document.querySelector('#cart').addEventListener('click', function () {
        if (cartContent.hasChildNodes()) {
            let tableNode = document.querySelector('.cart-content .table');
            cartContent.removeChild(tableNode);
        }

        let table = document.createElement('table');
        table.setAttribute('class', 'table table-stripped');

        let thead = document.createElement('thead');

        thead.innerHTML = `
        <tr>
            <th>Référence</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>sous total</th>
            <th></th>
        </tr>
        `;

        let tfoot = document.createElement('tfoot');
        tfoot.innerHTML = `
        <tr>
        <td colspan="5">Total</td>
        <td class="totalAmount">${totalAmount()}</td>
        </tr>
        `;

        let tbody = document.createElement('tbody');

        cart.forEach(function (article) {
            let articleRow = getCartArticleTemplate(article);
            tbody.appendChild(articleRow);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        // Insertion dans le DOM.
        cartContent.appendChild(table);
    })

    // Ajout au panier au clic.

    document.body.addEventListener('click', function (e) {
        // Enfant qui a déclenché l'évènement.
        let target = e.target;

        if (target.classList.contains('add')) {
            let ref = target.id;
            addToCart(ref);
        }
    });

    // Suppression d'une ligne du table du DOM.

    document.body.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('remove')) {
            removeTableChild(target);
            // Recherche de la référence sur la ligne contenant l'article.
            let ref = target.closest('tr').dataset.article;
            removeArticle(ref);

            // Mise à jour de la valeur du total dans le DOM.
            updateTotalAmount();
        }
    })
    // Modification de la quantité article.

    document.body.addEventListener('change', function (e) {
        let target = e.target;
        if (target.classList.contains('update')) {
            // On va chercher la référence sur la ligne contenant l'article.
            let ref = target.closest('tr').dataset.article;
            let value = target.value;
            setQuantity(ref, value);

            // Mise à jour de la valeur du total dans le DOM.
            updateTotalAmount();
        }
    })

    function addToCart(ref) {
        // let prod = articles.find(art => art.ref === ref);
        /*
        La méthode findIndex() renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction. 
        Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
        */
        let articleIndex = cart.findIndex(art => art.ref === ref);

        if (articleIndex == -1) {
            /*
            La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. 
            Sinon, la valeur undefined est renvoyée.
            */
            let article = articles.find(art => art.ref === ref);
            // initialisation
            article.quantity = 1;
            article.subTotal = subTotal;
            cart.push(article);
        } else {
            cart[articleIndex].quantity++;
        }
        // let article = articles.find(function(article){
        //     return article.ref === ref;
        // });       
    }

    function totalAmount() {
        let amount = 0;
        cart.forEach(function (article) {
            amount += article.subTotal();
        });
        return amount;
    }
    // Calcul du sous total.
    function subTotal() {
        return this.price * this.quantity;
    }

    function removeTableChild(element) {
        /*
        La méthode Element.closest() renvoie l'ancêtre le plus proche de l'élément courant (ou l'élément courant) qui correspond aux sélecteurs passés comme paramètres.
        S'il n'existe pas de tel ancêtre, la méthode renvoie null.
         */
        let tr = element.closest('tr');
        document.querySelector('tbody').removeChild(tr);
    }

    // Suppression du produit du tableau panier.

    function removeArticle(ref) {
        let articleIndex = cart.findIndex(art => art.ref === ref);

        let beforeArt = cart.slice(0, articleIndex);
        let afterArt = cart.slice(articleIndex + 1);
        cart = beforeArt.concat(afterArt);
        // cart = [...beforeArt, ...afterArt];
        console.log(cart);
    }

    // Mise à jour du total.

    function updateTotalAmount() {
        document.querySelector('.totalAmount').textContent = totalAmount();
    }

    function updateSubTotal(ref, article) {
        // alert(document.querySelector(`tr[data-article]`));
        document.querySelector(`tr[data-article="${ref}"] .subTotal`).textContent = article.subTotal();
    }

    // Modification de la quantité.
    function setQuantity(ref, value) {
        let article = cart.find(art => art.ref === ref);
        article.quantity = value;
        // Mise à jour du DOM.
        updateSubTotal(ref, article);
    }
});