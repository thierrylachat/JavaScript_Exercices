// Paragraphes cliqués.
function displayText(para) {
    let text = para.textContent;
    alert(`${text} cliqué !`);
}


// Moyenne de notes.
function sum(rateArray) {
    let sum = 0;
    rateArray.forEach(function (rate) {
        sum += rate;
    });
    return sum;
}

function avg(rateArray) {
    return sum(rateArray) / rateArray.length;
}
// let avg = function()
// {
// }

alert(avg([10, 11, 15, 10]));