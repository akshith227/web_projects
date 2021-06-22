var todo = []
var toAppend = "";
window.onload = function () {
    window.setTimeout(function () {
        var input = "";
        while (input !== "quit") {
            input = prompt("What do you want to do?");
            if (input === "list") {
                console.log("*****************************");
                todo.forEach(function (item, index) {
                    console.log(index + ": " + item);
                });
                console.log("*****************************");

            } else if (input === "new") {
                toAppend = prompt("What do you want to add to your list?");
                todo.push(toAppend);
                console.log("Your list is now: \n*****************************")

                todo.forEach(function (item, index) {
                    console.log(index + ": " + item);
                });
                console.log("*****************************");
            } else if (input === "quit") {
                console.log("Quitting app...");
                console.log("Quit.");
            } else if (input === "delete") {
                todo.splice(prompt("Which item do you want to delete?"), 1);
                console.log("Your list is now: \n*****************************")
                todo.forEach(function (item, index) {
                    console.log(index + ": " + item);
                });
                console.log("*****************************");

            } else {
                console.log("Please enter somethin' valid");
            }

        }
    }, "3000")
}