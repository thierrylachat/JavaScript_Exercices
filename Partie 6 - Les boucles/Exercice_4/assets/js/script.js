let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let text = '';


for (i = 0; i <= 6;) {
    
    text += days[i] + ' ';
    
    i++;
    
    if ((i > 4) && (i <= 6)) {

        let span = document.createElement('span');

        span.textContent = text;
        
        span.style.fontWeight = 'bold';
      
    }

    document.getElementById("week").innerHTML = text;

}




