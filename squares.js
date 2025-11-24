window.onload=function(){
    var add=document.getElementById("add");
    add.onclick = addSquare;

    //TODO: Make random color button work, make squares react to an onclick and make it come all the way in front of the screen
    //z index needed for second thing, higher brings it further up

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
    squarearea.appendChild(newSquare);
}

function changeColor(){
    
}