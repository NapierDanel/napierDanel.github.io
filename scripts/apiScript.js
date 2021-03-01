document.addEventListener('DOMContentLoaded', () => {


    // API 
    var requestURL = 'https://ghost-api-game.herokuapp.com/ghosts'
    document.getElementsByClassName('apiTest')

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var ghosts = request.response;
        console.log(ghosts);
    }


})