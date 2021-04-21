document.body.style.backgroundImage = "url('../pictures/forest.jpg')";
var health = document.getElementById("health");
health.value = parseInt(localStorage.getItem('health'));


var heightString = window.innerHeight - 300 + "px"

document.getElementById("container").style.height = heightString;

$(document).on('click', '#medikit1', function () {
   $('#medikit1').remove();
});
$(document).on('click', '#medikit2', function () {
   $('#medikit2').remove();
});
$(document).on('click', '#medikit3', function () {
   $('#medikit3').remove();
});

function takeMedikit() {
   new Audio("sounds/meditakesound.mp3").play();

   var localStoragehealth = parseInt(localStorage.getItem("health"));
   console.log("before" + localStoragehealth)
   localStoragehealth += 10;
   localStorage.setItem("health", localStoragehealth);
   health.value = localStoragehealth
}