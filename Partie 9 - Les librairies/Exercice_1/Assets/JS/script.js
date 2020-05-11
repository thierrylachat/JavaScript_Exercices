/* 
Sources : https://www.youtube.com/watch?v=qNMPcfEBmNI&feature=youtu.be
*/

var cleave = new Cleave('#telNumber', {
    phone: true,
    phoneRegionCode: 'FR'
});

var cleave = new Cleave('#date', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('#creditCardNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {

        if (type === 'visa') {
            document.querySelector('.fa-cc-visa').classList.add('active');
        } else {
            document.querySelector('.fa-cc-visa').classList.remove('active');
        }
        if (type === 'mastercard') {
            document.querySelector('.fa-cc-mastercard').classList.add('active');
        } else {
            document.querySelector('.fa-cc-mastercard').classList.remove('active');
        }
        if (type === 'amex') {
            document.querySelector('.fa-cc-amex').classList.add('active');
        } else {
            document.querySelector('.fa-cc-amex').classList.remove('active');
        }
    }
});