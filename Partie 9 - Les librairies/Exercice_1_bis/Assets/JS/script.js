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

        function typeOfCard(type) {

            document.querySelectorAll('.fab').forEach(function (icon) {
                icon.classList.remove('active');
                if (icon.classList.contains('fa-cc-' + type)) {
                    icon.classList.add('active');
                }
            });
        }

        typeOfCard(type);

    }
});