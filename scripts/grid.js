var rasp = localStorage.getItem('rasp');
var audio = new Audio('/sounds/rasp_sound.mp3');




var counter = 0;
if (!rasp) {
    document.getElementById('buttonText').innerHTML = 'It seems like you dont have the right tools, go back to the toilet and search for it.';
}

$("#grids").click(function () {
    if (counter == 10) {
        location.href = 'labor.html';
    }
    audio.play();
    $("#grids").css("background-image", "linear-gradient(to right, red 20px, transparent 1px, transparent);")
    counter++;
});


// get the mouse position
document.addEventListener('click', printMousePos, true);
function printMousePos(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log("pageX: " + cursorX + ",pageY: " + cursorY);
}
