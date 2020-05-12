let buttonsList = document.querySelectorAll('button');

buttonsList.forEach(function (button) {

    // DOM 2
    button.addEventListener('click', ModifyTextColor);
    button.addEventListener('click', ModifyTextStyle);

    // DOM 1
    // button.onclick = ModifyTextStyle;
    // button.onmouseover = ModifyTextColor;
})

function ModifyTextColor() {
    document.querySelector('p').style.color = this.dataset.color;
}

function ModifyTextStyle () {
    let attr = this.dataset;
    let p = document.querySelector('p');
    // Vérifier que la data attribute contient une valeur donnée.
    if(this.hasAttribute('data-font') && attr.font.includes('bold')){
        p.style.fontWeight = attr.font;
    }else{
        p.style.fontStyle = attr.font;
    }
}