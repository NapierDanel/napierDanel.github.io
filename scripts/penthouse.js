invert()

// create a negative Effect
function invert(){
    console.log("invert")

    var invertValue = 0.1;
    var penthouseImg = document.createElement("img");

    penthouseImg.setAttribute("src", "../pictures/carlos-aranda-m4U5R3ecEpc-unsplash.jpg");
    penthouseImg.setAttribute("height", "700px");
    penthouseImg.setAttribute("id", "penthouseImg");    
    penthouseImg.setAttribute("width", "1200px");

    setInterval(() => {

        invertValue += 0.1 ;
        invertValue = invertValue % 1;

        console.log("invertValue: " + invertValue)

        var invertString = ("invert(" + invertValue + ")");

       
        penthouseImg.style.filter = invertString;
    
        document.body.appendChild(penthouseImg)
    }, 20);

}

