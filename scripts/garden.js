if(localStorage.getItem("secretKey")){
    console.log("True") 
    var crosshairImage = document.createElement("img");
    crosshairImage.src = '/pictures/redCircle.png';
    document.getElementById("crosshair").appendChild(crosshairImage);


}


function onCrossHairClicked(){
    console.log("bla")
    window.location.href = "rocketStation.html";

}



