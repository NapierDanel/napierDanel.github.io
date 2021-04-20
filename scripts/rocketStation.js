const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
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
  var playerTime = ((endDate - (sessionStorage.getItem("startDate"))));

  document.getElementById("userTime").innerHTML = ("Playtime: " + playerTime);

  addHighScoresEntry(gameTimePrint);
  writeUserGameTimeToHighScoreFirebaseDatabase(playerTime);
}

// Add the score from User to Highscores List
function addHighScoresEntry(time) {
  var username = localStorage.getItem("username");
  console.log(username);
  var highScoresEntry = {
    name: username,
    score: time
  }

  var existingHighScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(existingHighScores);
  if (existingHighScores == null) existingHighScores = [];

  localStorage.setItem("highScoresEntry", JSON.stringify(highScoresEntry))
  existingHighScores.push(highScoresEntry);
  localStorage.setItem("highScores", JSON.stringify(existingHighScores))
}

document.getElementById("userDeaths").innerHTML = ("Deaths: " + localStorage.getItem("deaths"));
document.getElementById("userLifes").innerHTML = ("Lifes: " + localStorage.getItem("lifes"));
document.getElementById("userJumps").innerHTML = ("Jumps: " + localStorage.getItem("jumps"));
document.getElementById("userHits").innerHTML = ("Hits: " + localStorage.getItem("hits"));


highScoresList.innerHTML = highScores
  .map(highScore => {
    return '<li class="high-score">' + highScore.name + '   -   ' + highScore.score + '</li>';
  }).join('');


function writeUserGameTimeToHighScoreFirebaseDatabase(time) {
  firebase.database().ref('highscores').set(
    {
      username: localStorage.getItem(username),
      time: time
    }
  )
}
