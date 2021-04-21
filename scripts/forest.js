document.body.style.backgroundImage = "url('../pictures/forest.jpg')";
var health = parseInt(localStorage.getItem('health'));
console.log(health)

var heightString = window.innerHeight-300 + "px"

document.getElementById("container").style.height = heightString;

$(document).on('click','#medikit1',function(){
  $('#img').remove();
  takeMedikit();
});
$(document).on('click','#medikit2',function(){
   $('#img').remove();
   takeMedikit();
 });
 $(document).on('click','#medikit3',function(){
   $('#img').remove();
   takeMedikit();
 });

 function takeMedikit(){
   health+=10;

 }