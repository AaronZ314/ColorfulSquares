window.onload=function(){
    var squarearea = document.getElementById("squarearea");

    var squareCount = parseInt(Math.random()*21)+30;

    for(let i = 0;i<squareCount;i++) {
        var newSquare = document.createElement('div');
        newSquare.className = "square";
        squarearea.appendChild(newSquare);
    }

}