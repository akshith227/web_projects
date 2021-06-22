window.onload = function () {
    function isEven(num) {
        if (isNaN(num)) {
            console.log("not a number");
            return false;
        } else {
            if (num % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    console.log("Is 437653453654 even? " + isEven(437653453654));
    console.log("Is 437653453655 even? " + isEven(437653453655));
    console.log("Is 4.5 even? " + isEven(4.5));
    console.log("Is \"hello\" even?");
    isEven("Hello");
    console.log("\n\n\n\n\n");

    function factorial(num) {
        var factorial = 1;
        if (isNaN(num)) {
            console.log("not a number");
            return -1;
        } else {
            if (num === 0) {
                return 1;
            } else {
                while (num !== 0) {
                    factorial *= num;
                    num--;
                }
                return factorial;
            }
        }
    }
    console.log("factorial of 3 is " + factorial(3));
    console.log("factorial of 5 is " + factorial(5));
    console.log("factorial of 10 is " + factorial(10));
    console.log("Factorial of 0 is " + factorial(0));
    console.log("Factorial of \"hello\" is ");
    factorial("hello");
    console.log("\n\n\n\n\n");

    function kebabToSnake(string) {
        if (typeof string != "string") {
            return "\n Oops, you need to enter a string for this to work...";
        } else {
            var newStr = string.replace("-", "_");
            return newStr;
        }
    }
    console.log("SnakeTyping version of \"bob-dob\" is " + kebabToSnake("bob-dob"));
    console.log("SnakeTyping version of 3 is " + kebabToSnake(3));
}