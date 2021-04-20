
var foundRasp = false;

function foundDoor(event){
    console.log("Found")
    if(foundRasp){ 
        location.href='grid.html';
    }
}

// get the mouse position
document.addEventListener('click', printMousePos, true);
function printMousePos(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log("pageX: " + cursorX + ",pageY: " + cursorY);
}

function showRaspText(){
    document.getElementById('raspHintText').innerHTML = "You found a Rasp, what can you do with it? Maybe somewhere is a secret Door";
}

$( function() {
    $( "#iFrameRasp" ).draggable();
  });


document.getElementById('iFrameRasp').contentDocument.addEventListener('click',
    showRaspText(),
    foundRasp = true,
    localStorage.setItem('rasp', true)
)



