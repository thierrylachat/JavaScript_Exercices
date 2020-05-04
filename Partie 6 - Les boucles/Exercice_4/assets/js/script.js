let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];


// SOLUTION 1 NOK.
// let text = '';

// for (i = 0; i <= 6;) {
//     text += days[i] + ' ';
//     i++;
    
//     if ((i > 4) && (i <= 6)) {
//         let span = document.createElement('span');
//         span.textContent = text;
//         span.style.fontWeight = 'bold';
//     }

//     document.getElementById("week").innerHTML = text;

// }


// SOLUTION 2.

days.forEach(function(item, index, array) {
    document.write(item + ' ');
});

let saturday = days[5];
let sunday = days[6];

document.querySelector('saturday').style.fontWeight = 'bold';
sunday.style.fontWeight = 'bold';



