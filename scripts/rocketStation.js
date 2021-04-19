const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



stopCount();

//  Stop gameTime and add it to the highScores
function stopCount() {
  endDate = new Date();
  timer_is_on = false;
  console.log(endDate.getTime());
  start = new Date((sessionStorage.getItem("startDate")));

  var gameTimeSeconds = Math.floor((endDate.getTime() - start.getTime()) / 1000);
  var gameTimePrint = new Date(gameTimeSeconds * 1000).toISOString().substr(11, 8)
  document.getElementById("userTime").innerHTML = ("Playtime: " + gameTimePrint);

  console.log(gameTimePrint);

  addHighScoresEntry(gameTimePrint);
}

// Add the score from User to Highscores List
function addHighScoresEntry(time){
  var username = localStorage.getItem("username");
  console.log(username);
  var highScoresEntry = {
    name: username,
    score: time   
  }

  var existingHighScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(existingHighScores);
  if(existingHighScores == null) existingHighScores = [];
  
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



console.log(highScores);

