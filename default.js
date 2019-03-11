function countdown() {
    // setups
    var miliToDays = 86400000;
    var miliToHour = 3600000;
    var miliToMinutes = 60000;
    var days = 0;
    var hours = 0;
    var minutes = 0;

    // get diff
    var wedding = new Date('2019/05/18 11:30:00');
    var now = new Date();
    var diff = wedding.getTime() - now.getTime();

    if (diff >= 0) {
        // get days
        days = Math.floor(diff / miliToDays);
        diff = diff - days * miliToDays;

        // get hours
        hours = Math.floor(diff / miliToHour);
        diff = diff - hours * miliToHour;

        // get minutes
        minutes = Math.floor(diff / miliToMinutes);
        diff = diff - minutes * miliToMinutes;
    }

    // assing values to labels
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
}

function handleQR() {
    var price = document.getElementById('price').value;
    var message = document.getElementById('note').value;
    var date = new Date();
    var formatDate = date.getFullYear() + date.getMonth() + date.getDate();

    var hash =
        'SPD*1.0*ACC:CZ0961000000001025000263*AM:' +
        price +
        '*CC:CZK*DT:' +
        formatDate +
        '*MSG:' +
        message;

    var url = 'https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=' + hash;
    var image = document.createElement('img');
    image.src = url;
    image.alt = 'qr code';

    var form = document.getElementById('form');
    var parentNode = form.parentNode;

    parentNode.replaceChild(image, form);

    return false;
}

document.addEventListener('DOMContentLoaded', function(event) {
    countdown();
    setInterval(countdown, 30000);
});
