const highScoresList = document.getElementById("highScoresList");
//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
localStorage.setItem('rasp', false)

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjASZU9MqD8kOxHh-kqJhVJyF-iWyWXk8",
  authDomain: "webtech-fddf0.firebaseapp.com",
  projectId: "webtech-fddf0",
  storageBucket: "webtech-fddf0.appspot.com",
  messagingSenderId: "494252843338",
  appId: "1:494252843338:web:4da8b6afda02edbe5b61b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

stopCount();

//  Stop gameTime and add it to the highScores
function stopCount() {
  endDate = Date.now();
  timer_is_on = false;

  var diffInMilliSeconds = (endDate - localStorage.getItem("startDate")); 
  var printPlayTimeString = millisToMinutesAndSeconds(diffInMilliSeconds)

  document.getElementById("userTime").innerHTML = ("Playtime: " + printPlayTimeString);

  //addHighScoresEntry(gameTimePrint);
  writeUserGameTimeToHighScoreFirebaseDatabase(diffInMilliSeconds);
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function writeUserGameTimeToHighScoreFirebaseDatabase(time) {
  database.collection('highscores').add(
    {
      username: localStorage.getItem("username"),
      time: time
    }
  )
}

document.getElementById("userDeaths").innerHTML = ("Deaths: " + localStorage.getItem("deaths"));
document.getElementById("userLifes").innerHTML = ("Lifes: " + localStorage.getItem("lifes"));
document.getElementById("userJumps").innerHTML = ("Jumps: " + localStorage.getItem("jumps"));
document.getElementById("userHits").innerHTML = ("Hits: " + localStorage.getItem("hits"));

// Print highscores from Firebase
getHighScoresFromFirebase();

// get the highscores from Firebase and print the 5 best times on Document
async function getHighScoresFromFirebase() {
  const snapshot = await firebase.firestore().collection('highscores').orderBy("time").limit(5).get()
  var highScoresMap = new Map();
  snapshot.docs.map(nameScore =>
    highScoresMap.set(nameScore.data().time, nameScore.data().username)
  )
  console.log(highScoresMap)
  var highScoresString = "";

  highScoresMap
    .forEach((username, score) => {
      console.log(username);
      highScoresString += '<li class="high-score">' + username + '   -   ' + score + '</li>';
    });
  console.log(highScoresString)
  highScoresList.innerHTML = highScoresString;
}

// var highScoresListFromFirebase = await getHighScoresFromFirebase();
// console.log(highScoresListFromFirebase)

// highScoresList.innerHTML = highScores
//   .map(highScore => {
//     return '<li class="high-score">' + highScore.name + '   -   ' + highScore.score + '</li>';
//   }).join('');

// Add the score from User to Highscores List
// function addHighScoresEntry(time) {
//   var username = localStorage.getItem("username");
//   console.log(username);
//   var highScoresEntry = {
//     name: username,
//     score: time
//   }

//   var existingHighScores = JSON.parse(localStorage.getItem("highScores"));
//   console.log(existingHighScores);
//   if (existingHighScores == null) existingHighScores = [];

//   localStorage.setItem("highScoresEntry", JSON.stringify(highScoresEntry))
//   existingHighScores.push(highScoresEntry);
//   localStorage.setItem("highScores", JSON.stringify(existingHighScores))
// }