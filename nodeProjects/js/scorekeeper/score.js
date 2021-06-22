var player1score = 0;
var player2score = 0;
var player1text = document.getElementById("player1score");
var player2text = document.getElementById("player2score");
var playinglimit = 5;
var player1win = false;
var player2win = false;
var playing = true;

function displayScore() {
    player1text.innerHTML = "Player 1: <span class=\"font-weight-bold\"> " + player1score + "</span>";
    player2text.innerHTML = "Player 1: <span class=\"font-weight-bold\"> " + player2score + "</span>";
}

function win(player) {
    if (player === 1) {
        document.getElementById("player1score").classList.add("won");
    } else if (player === 2) {
        document.getElementById("player2score").classList.add("won");
    }
}

function reset() {
    player1score = 0;
    player2score = 0;
    displayScore();
}
window.onload = function () {
    document.getElementById("playingto").addEventListener("change", function () {
        if (playing) {
            if (document.getElementById("playingto").value < 1) {
                document.getElementById("playinglimitdisplay").textContent = "1";
                document.getElementById("playingto").value = 1;
                playinglimit = parseInt("1");
                reset();
            } else {
                document.getElementById("playinglimitdisplay").textContent = document.getElementById("playingto").value;
                playinglimit = parseInt(document.getElementById("playingto").value);
                console.log(playinglimit);
                reset();
            }
        }
    })
    document.getElementById("reset").addEventListener("click", function () {
        reset();
        document.getElementById("player1score").classList.remove("won");
        document.getElementById("player2score").classList.remove("won");

        playing = true;
    })
    document.getElementById("player1inc").addEventListener("click", function () {
        if (playing) {
            player1score++;
            if (player1score === playinglimit) {
                player1text.innerHTML = "Player 1 Wins!";
                win(1);
                playing = false;
            } else {
                displayScore();
            }
        }
    })
    document.getElementById("player2inc").addEventListener("click", function () {
        if (playing) {
            player2score++;
            if (player2score === playinglimit) {
                player2text.innerHTML = "Player 2 Wins!";
                win(2);
                playing = false;
            } else {
                displayScore();
            }
        }
    })
}