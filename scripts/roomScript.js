var context = new (window.AudioContext || window.webkitAudioContext)();
let health = document.getElementById("health")
var zoomGhostDeath = false;
health.value = parseInt(localStorage.getItem("health"));

// var oscollator = context.createOscillator();
// h = window.innerHeight;
// oscollator.connect(context.destination);
// oscollator.start(0);
// document.addEventListener("mousemove", function (e) {
//     oscollator.frequency.value = e.clientY / h * 1000 + 300;
// });

//document.getElementById("roomGhost").play();

var clicks = 0;

var healthdec = setInterval(function () {
    if (zoomGhostDeath) {
        clearInterval(healthdec);
        showMedikit();
    }

    // Save hit
    var hits = parseInt(localStorage.getItem("hits"));
    localStorage.removeItem("hits")
    hits += 10;
    console.log("hit")
    localStorage.setItem("hits", hits);

    // Save health
    health.value -= 10;
    var localStoragehealth = parseInt(localStorage.getItem("health"));
    localStorage.removeItem("health")
    localStoragehealth -= 10;
    localStorage.setItem("health", localStoragehealth);

    console.log(localStoragehealth)

    if (localStoragehealth === 0) {
        clearInterval(healthdec)
        var localStorageDeaths = parseInt(localStorage.getItem("deaths"));
        localStorageDeaths += 1;
        localStorage.removeItem("deaths");
        localStorage.setItem("deaths", localStorageDeaths);
        let alterString = 'Game over \nYou reached ' + points + ' points'
        if (window.confirm(alterString)) {
            window.location.href = 'index.html';
        };
    }
}, 2000);


function showMedikit() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "pictures/emergency-doctor-147857_1280.png");
    x.setAttribute("id", "medikitImg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.align = "center";
    x.bottom = "0px";
    x.margin = "0 auto";
    x.setAttribute("alt", "Medi Kit");
    x.setAttribute("position", "center");


    document.body.appendChild(x);
    document.getElementById('medikitImg').style.display = "block";
    document.getElementById('medikitImg').style.marginLeft = "auto";
    document.getElementById('medikitImg').style.marginRight = "auto";
    document.getElementById('medikitImg').style.bottom = "500px"
    document.getElementById('medikitImg').onclick = function clickEvent(e) {
        console.log("onMediKidClick")
        x.parentNode.removeChild(x);
        health.value = 100;
    };
}



function attackGhost() {
    console.log("shot")
    new Audio("sounds/laser_Gun.mp3").play();
    var localStorageBeats = parseInt(localStorage.getItem("beats"));
    localStorageBeats += 1;
    localStorage.removeItem("beats");
    localStorage.setItem("beats", localStorageBeats);

    if (clicks == 10) {
        zoomGhostDeath = true;
        var ghostElement = document.getElementById("zoomGhost");
        ghostElement.style.display = 'none';
        new Audio("sounds/destroy_sound.mp3").play();

        return

    }
    console.log("hit")

    clicks++;

}

function circle() {
    var width = 10,
        height = 10,
        offsetX = 100,
        offsetY = 100,
        x = Math.cos(new Date()) * width + offsetX;
        y = Math.sin(new Date()) * height + offsetY;

    document.getElementsByClassName("ghost")[0].style.left = x;
    document.getElementsByClassName("ghost")[0].style.top = y;

    setTimeout(circle, 50);
}


// var ghost = class Ghost {

// constructor(name, attackPoints, defencePoints)
// }

document.getElementById('zoomGhost').onclick = function clickEvent(e) {
    console.log("onClick")
    attackGhost();

};

document.getElementById('body').onclick = function clickEvent(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
}
