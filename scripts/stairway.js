console.log("Welcome to the stairway")

$("html").click(function(e){
  var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
  var pOffset = $(this).offset(); 
  var x = e.pageX - pOffset.left;
   if(pWidth/2 > x){
     console.log("left")
     window.location.href = "penthouse.html";

   }
   else{
    window.location.href = "toilet.html";
   }
});

// TODO
// [] toilet link
// [] toilette freischaufeln
// [] rocket station 
// [] 
// []
// []
// []
// []
// []
// []
