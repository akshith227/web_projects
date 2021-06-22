window.onload = function () {
    var notYes = true;
    var input = "";
    while (notYes) {
        input = prompt("Are we there yet?");
        // ES6 method of checking substring in string
        if (input.includes("yes") || input.includes("yeah")) {
            notYes = false;
            alert("Yay, we finally made it!");
        } else {
            notYes = true;
        }
    }
}

