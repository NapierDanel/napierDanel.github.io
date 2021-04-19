

function addElement() {



   document.body.style.background = backgroundImage

   console.log("Yeha")

}

document.body.onload = addElement;

function addElement() {
   var newDiv = document.createElement("div");
   var backgroundImage = document.createElement('img', "style.background: 100%");

   backgroundImage.src = '../pictures/forest-1072828_1920.jpg'
   newDiv.appendChild(backgroundImage);

   var currentDiv = document.getElementById("div1");
   document.body.insertBefore(newDiv, currentDiv);
}