function displayText(para) {
    let text = para.textContent;
    alert(`${text} cliqué ! `);
}


function sum(rateArray) {
    let sum = 0;
    rateArray.forEach(function (rate) {
        sum += rate
    })
    return sum;
}

function avg(rateArray) {
    return sum(rateArray)/rateArray.length;
}

alert(avg([10, 11 , 10, 15]));

let avg = function()
{
    
}