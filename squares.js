window.onload=function(){
    var add=document.getElementById("add");
    var colors=document.getElementById("colors");
    add.onclick = addSquare;
    colors.onclick = changeColor;

    //picks from 1-50 squares to make
    var squareCount = parseInt(Math.random()*21)+30;

    console.log(squareCount + "squares");
    
    for(let i = 0;i<squareCount;i++) {
        addSquare();
    }
}
function getRandomColor(){
    var possibilities = "0123456789ABCDEF";
    var result ="#";
    for(var i =0;i<6;i++){
        result+=possibilities.charAt(parseInt(Math.random()*possibilities.length));
    }
    return result;
}
function addSquare(){
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement('div');
    newSquare.className = "square";

    //randomize size of squares
    newSquare.style.height = parseInt(Math.random()*11)+45 + "px";
    newSquare.style.width = parseInt(Math.random()*11)+45 + "px";

    //changed math.random because squares kept going out of the box
    newSquare.style.left = parseInt(Math.random()*646)+"px";
    newSquare.style.top = parseInt(Math.random()*246)+"px";
    newSquare.style.backgroundColor=getRandomColor();
    //Make it so squares can be clicked
    newSquare.onclick = editSquarePlacement;
    squarearea.appendChild(newSquare);
}

// Change colors function that loops for every square present then sets the background color as random 
function changeColor(){
    const squaresAll = document.querySelectorAll(".square");
    for (let i = 0;i<squaresAll.length; i++) {
        squaresAll[i].style.backgroundColor = getRandomColor();
    }
}

//make a large number for the z to be
let highestZ = 1000;

function editSquarePlacement(){
    //this will always be less than highestZ at the start
    if(this.style.zIndex == highestZ) {
            console.log("square removed");
            this.remove();
            const squaresAll = document.querySelectorAll(".square");
            for(let i = 0;i<squaresAll.length; i++){
                squaresAll[i].style.zIndex = 1;
            }
        }
    //this is so you can click squares overlapping each other over and over without issue
    highestZ++;
    this.style.zIndex = highestZ;
}