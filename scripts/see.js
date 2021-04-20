//const scoreBoard = document.querySelector(".score")
const fish = document.querySelectorAll(".fish")
const waterpoints = document.querySelectorAll(".waterpoint")
let lastWaterpoint;
let timeUp = false;
var score;

document.getElementById("seeSound").play();
startGame();

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function randomWaterpoint(waterpoints) {
    const inx = Math.floor(Math.random() * waterpoints.length);
    const waterpoint = waterpoints[inx];
    if (waterpoint == lastWaterpoint) {
        return randomWaterpoint(waterpoints);
    }

    lastWaterpoint = waterpoint;

    return waterpoint;
}


function peep() {
    const time = randomTime(200, 1000);
    const waterpoint = randomWaterpoint(waterpoints);

    waterpoint.classList.add('up');

    setTimeout(() => {
        waterpoint.classList.remove('up');
        if (!timeUp) {
            console.log("peep")

            peep();
        }
    }, time);
}

function bonk(e) {
    score++;
    this.classList.remove('up');
    console.log(e)
}

fish.forEach(fish => {
    fish.addEventListener('click', bonk);
})


function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
    }, 100000);
}

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)