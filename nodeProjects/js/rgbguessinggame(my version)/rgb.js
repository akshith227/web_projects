// var squares = document.querySelectorAll(".square");
// var randomColor = "";
// var colors = []
// function randomRGB() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     return bgColor;
// }
// window.onload = function () {

//     for (i = 0; i < squares.length; i++) {
//         randomColor = randomRGB();
//         squares[i].style.backgroundColor = randomColor;
//     }
// }
var squares = document.querySelectorAll(".square");
var correct = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/20180430/correct--_gb_1.mp3');

var colors = [];
var chosen;
var playing;
function reset(){
    document.getElementById("title").style.backgroundColor = "lightblue";
    squares.forEach(square => {
        square.classList.remove("fadein");
        square.classList.remove("fadeout");
        square.id = "";
    });
}
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    if(x>249){
        x-=20;
    }
    var y = Math.floor(Math.random() * 256);
    if(y>249){
        y-=20;
    }
    var z = Math.floor(Math.random() * 256);
    if(y>249){
        y-=20;
    }
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}

function addColors() {
    for (i = 0; i < squares.length; i++) {
        colors.push(randomRGB());
    }
}

function play() {
    playing = true;
    squares.forEach(element => {
        element.classList.add("fadein");
    })

    colors = [];
    addColors();
    chosen = Math.floor(Math.random() * squares.length);
    document.getElementById("clue").textContent = colors[chosen];
    colors.forEach(function (color, index) {
        squares[index].style.backgroundColor = color;
        if (index === chosen) {
            squares[index].id = "correct";
        }
    })
    //reload elements :D
    squares = document.querySelectorAll(".square");
    squares.forEach(function (element) {
        element.addEventListener("click", function () {
            if (playing) {
                if (element.id === "correct") {
                    correct.play();
                    squares.forEach(square => {
                        square.style.backgroundColor = element.style.backgroundColor;
                        document.getElementById("title").style.backgroundColor = element.style.backgroundColor;
                    })
                    playing = false;
                    colors = [];
                } else {
                    element.classList.add("fadeout");
                    setTimeout(function () {
                        element.style.backgroundColor = "white";
                    }, 490);

                }
            }
        })
    })
}

window.onload = function () {
    play();
    document.getElementById("again").addEventListener("click", function () {
        reset();
        play();
    })
}