// Analytics
var hitsInGame = 0
var gameOver = 0
var health = 100
var time = 0
var roomsEntered = 0

var startDate;
var endDate;



var c = 0;
var t;
var timer_is_on = false;
var time = 0;



// Player -----------------------------------------------------------------

function generatePlayer(inputName) {
    player = {
        "name": inputName,
        "lifes": 100,
        "tools": [],


    }
}

// Cookies ----------------------------------------------------------------



// Ghosts ----------------------------------------------------------------
var roomGhost =
{
    "id": 0,
    "name": "RoomGhost",
    "path": "pictures/ghost.png",
    "spookLevel": 5,
    "specialAttacks": [
        "zoom",
        "scream",
        "whiteFist"
    ],
    "enviroments": [
        "room"
    ]
};

// ISS Api ----------------------------------------------------------------


async function getISS() {

    const issUrl = ("https://api.wheretheiss.at/v1/satellites/25544");
    const response = await fetch(issUrl);
    const data = await response.json();
    console.log(data);

    // get lat lon into const variables
    const { latitude, longitude } = data;
    console.log(latitude);
    console.log(longitude);
}


//getISS();

// SpaceX Api ----------------------------------------------------------------

    const issUrl = ("https://api.wheretheiss.at/v1/satellites/25544");
    const response = await fetch(issUrl);
    const data = await response.json();
    console.log(data);

async function getAllSpaceXMissions() {

    const spacexUrl = "https://api.spacexdata.com/v3/missions";
    const response = await fetch(spacexUrl);
    const data = await response.json();
    console.log(data);

    // get lat lon into const variables
    const { mission_name, payload_ids } = data;
    console.log(mission_name);
    console.log(payload_ids);
}


//getAllSpaceXMissions();

// Ghost Api ----------------------------------------------------------------


let ghostApiUrl = "https://ghost-api-game.herokuapp.com/ghosts";
var ghostApiResponseObject;

async function getGhosts() {
    let response = await fetch(ghostApiUrl);
    let ghostsJsonResponse = await response.json();
    return ghostsJsonResponse;
}

getGhosts().then(
    data =>
        console.log(data)
)
    .catch(err => {
        console.log("Error :0");
        console.err(err);
    });

console.log("ghostApiResponseObject: " + ghostApiResponseObject)

console.log("Ghosts");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level")





document.cookie = "user, initTime";


var x = document.cookie;

console.log(x);

// Start new Game and go to index
function startGame() {
    let inputName = document.getElementById("nameInput").value;
    if (inputName === "") {
        document.getElementById("nameInput").style.borderColor = "red";
        return
    }
    localStorage.setItem("username", inputName)
    startCount();
    setItems();
    location.href = 'intro.html'
}

function setItems() {
    // Init Statistics
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("lifes", 100);
    localStorage.setItem("deaths", 0);
    localStorage.setItem("jumps", 0);
    localStorage.setItem("hits", 0);
    localStorage.setItem("beats", 0);

    console.log(localStorage.getItem("startDate"));
    console.log(localStorage.getItem("lifes"));

}

function startCount() {
    timer_is_on = true;
    startDate = Date.now();
}

// var elements = [];
//     elements[0] = {name: "Alpha" , score: "454"}, 
//     elements[1] = {name: "Beta"  , score: "22223"   }, 
//     elements[2] = {name: "Gamma" , score: "2324"   };

// localStorage.setItem("highScores", JSON.stringify(elements))
