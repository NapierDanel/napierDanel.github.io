let health = document.getElementById("health")
document.getElementById("trimmer").play();
document.getElementById("smile").play();
var haveSecretKey = localStorage.getItem("secretKey");
console.log("have secret key: " + haveSecretKey);

// Show the crosshair to the rocketStation if the user got the secret key
if (!haveSecretKey) {
    console.log("True")
    var crosshairImage = document.createElement("img");
    crosshairImage.src = '../pictures/redCircle.png';
    document.getElementById("crosshair").appendChild(crosshairImage);

    // if the player found the secret labor of conrad zuse, the crosshair to the rocket station will appear
    function onCrossHairClicked() {
        window.location.href = "rocketStation.html";
    }

} else {
    // Put the ghost somewhere on the screen 
    // https://stackoverflow.com/questions/31843349/random-position-of-images
    // Hit the ghost 10 times and to kill him
    var canvas = document.querySelector('#x');
    var icon_template = document.querySelector('#template');
    var icon_width = 5;
    var icon_height = 5;
    var max_height = 500;
    var max_width = 1200;
    var pixelGhostPath = "../pictures/pixelGhost.png"
    var killedGhosts = 0;

    var randomCoordinate = function () {
        var r = [];
        var x = Math.floor(Math.random() * max_width);
        var y = Math.floor(Math.random() * max_height);
        r = [x, y];
        return r;
    };

// Create 10 Ghosts who attack the user 
// the user can destroy them by clicking 3 times on them
    var createGhost = function () {
        var shots = 0;
        var node = icon_template.cloneNode(true);
        var xy = randomCoordinate();
        node.removeAttribute('id');
        node.removeAttribute('hidden');
        node.style.top = xy[1] + 'px';
        node.style.left = xy[0] + 'px';
        node.setAttribute('src', pixelGhostPath);
        node.style.cursor = "crosshair"
        node.onclick = function onGhostShot() {
            if (shots == 2) {
                new Audio("sounds/destroy_sound.mp3").play();
                console.log("GhostClick")
                node.setAttribute('hidden', true);
                killedGhosts++;
                if (killedGhosts == 10) {
                    document.getElementById("trimmer").pause();
                    document.getElementById("smile").pause();
                    showMedikit();
                }
            }
            shots++;
            new Audio("sounds/laser_Gun.mp3").play();


        };
        canvas.appendChild(node);

    };



    var iterations = 0;

    var generateGhostInterval = setInterval(function () {
        iterations++;
        if (iterations >= 10) {
            clearInterval(generateGhostInterval);
        }
        createGhost()
    }, 1000);


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
}
