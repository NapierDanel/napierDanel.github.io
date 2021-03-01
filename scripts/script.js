var c = 0;
var t;
var timer_is_on = 0;
var time = 0;

function timedCount() {
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}


// Jump and Run Part

// When Dom loaded
document.addEventListener('DOMContentLoaded', () => {

    // Lifes
    let health = document.getElementById("health")

    const lifeObjects = document.querySelector('lifes')
    var lifes = 5

    const character = document.querySelector('.character')
    const campfire = document.querySelector('.campfire')
    const game = document.querySelector('.game')
    const pointsValue = document.querySelector('.pointsValue')

    let isGameOver = false
    let points = 0


    let bottom = 0
    let gravity = 0.9
    let isJumping = false

    let isGoingLeft = false
    let isGoingRight = false

    let left = 0
    let right = 0


    var width
    var height

    let fireRight = window.innerWidth;

    let rightTimerId
    let leftTimerId

    var resize = function () {
        width = window.innerWidth * 2
        height = window.innerHeight * 2
    }

    window.onresize = resize
    resize()

    let campfireSlide = setInterval(function () {
        campfire.style.bottom = fireRight + 'px'
    })

    function jump() {
        if (isJumping) return

        if (isGoingRight) {
            character.classList.add('character-jump-right')
        } else if (isGoingLeft) {
            character.classList.add('character-jump-left')
        } else {
            character.classList.add('character-jump-right')
        }


        let timerUpId = setInterval(function () {

            if (bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval(function () {
                    if (bottom <= 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                        character.classList.remove('character-jump-right')
                        character.classList.remove('character-jump-left')
                        character.classList.add('character')
                    }
                    bottom -= 5
                    character.style.bottom = bottom + 'px'
                }, 20)

            }
            isJumping = true
            bottom += 30
            character.style.bottom = bottom * 0.9 + 'px'

            if (isGoingLeft) {
                character.classList.add('character-slide-left')
            } else {
                character.classList.add('character-slide-right')
            }
        }, 20)

    }

    function slideLeft() {

        if (isGoingLeft) return

        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
            character.classList.add('character-slide-left')
        }
        if (isJumping) {
            character.classList.remove('character-jump-right')
            character.classList.add('character-jump-left')
        } else {
            character.classList.remove('character-slide-right')
            character.classList.add('character-slide-left')
        }
        isGoingLeft = true

        leftTimerId = setInterval(function () {
            left -= 5
            if (left < 0) left = 0
            character.style.left = left + 'px'

        }, 20)


    }

    function slideRight() {

        if (isGoingRight) return

        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
            character.classList.add('character-slide-right')
        }

        if (isJumping) {
            character.classList.remove('character-jump-left')
            character.classList.add('character-jump-right')
        } else {
            character.classList.remove('character-slide-left')
            character.classList.add('character-slide-right')
        }

        isGoingRight = true

        rightTimerId = setInterval(function () {
            left += 5
            if (left >= (window.innerWidth - 150)) {
                left = window.innerWidth - 150
            }
            character.style.left = left + 'px'
        }, 20)


    }

    function generateObstacles() {
       
        let hit = false
        let randomTime = Math.random() * 4000
        let obstaclePosition = window.innerWidth - 120
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')

        if (health.value != 0) obstacle.classList.add('obstacle')
        game.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function () {
            if (obstaclePosition > left && obstaclePosition < (left + 100) && bottom < 100) {
                if (health.value === 10) {
                    clearInterval(timerId)
                    alert.innerHTML = 'Game Over'
                    isGameOver = true
                    hit = true
                    //remove all childs
                    while (game.firstChild) {
                        game.removeChild(game.lastChild)
                    }
                } else {
                    hit = true
                    health.value -= 10;
                    clearInterval(timerId)
                    console.log('hit! ' + health.value)
                    game.removeChild(obstacle)
                }
            }
            obstaclePosition -= 10
            obstacle.style.left = obstaclePosition + 'px'
            
        }, 20)

        if (!isGameOver) {
            setTimeout(generateObstacles, randomTime)
          
        } else {
            let alterString = 'Game over \nYou reached ' + points + ' points'
            if (window.confirm(alterString)) {
                window.location.href = 'index.html';
            };
        }

        if(points >= 500){
            window.location.replace('forest.html')
        }

        if(!hit){
            points += 10
            pointsValue.textContent = points
        }
       
    }

    // assign function jump to keycodes
    function control(e) {
        // Up is pressed
        if (e.keyCode == 38) {
            jump()
        }
        // Left is pressed
        else if (e.keyCode == 37) {
            slideLeft()
        }
        // Left is pressed
        else if (e.keyCode == 39) {
            slideRight()
        }
    }

    generateObstacles()
    document.addEventListener('keydown', control)


})
