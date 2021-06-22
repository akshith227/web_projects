var num = randomboi(1,3);
var guess = Number(prompt("Guess a number between 1 and 3"));
if(guess===num) {
    alert("Spot on!");
}
else {
    alert("Good try, the number was "  + num + ", not " + guess);
}
//Courtesy of MDN and/or Stack Overflow for the function to generate a random whole integer xD :D
function randomboi(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}