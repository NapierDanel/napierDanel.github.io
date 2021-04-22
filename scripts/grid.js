var rasp = localStorage.getItem('rasp');
var audio = new Audio('/sounds/rasp_sound.mp3');

var counter = 0;
// without the rasp the user cant rasp the grid
if (!rasp) {
    document.getElementById('buttonText').innerHTML = 'It seems like you dont have the right tools, go back to the toilet and search for it.';
}

// when the user clicks 10 times on the grid he will get into the labor of conrad zuse
$("#grids").click(function () {
    if (counter == 10) {
        location.href = 'labor.html';
    }
    //background-image: linear-gradient(to right, grey 20px, transparent 1px, transparent);
    // width: 100%;
    // height: 700px;
    // background-color: aqua;
    // background-size: 50px 700px;
    // background-repeat: repeat-x;
    // background-image: linear-gradient(to right, grey 20px, transparent 1px, transparent);
    // background-position: left 30px top, left 5px bottom, left 5px center;


    audio.play();
    $("#grids").css("background-repeat", "repeat-x")
    $("#grids").css("background-image", "linear-gradient(to right, grey " + (10 - counter) + "px, transparent 1px, transparent)")
    $("#grids").css("background-size", "50px 700px")

    counter++;
});


// get the mouse position
document.addEventListener('click', printMousePos, true);
function printMousePos(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log("pageX: " + cursorX + ",pageY: " + cursorY);
}
