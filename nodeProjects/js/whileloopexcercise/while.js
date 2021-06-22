console.log("Ex 1: \n \n");
//universal count variable declared
var num = 0;
num = -10;
while (num <= 19) {
    console.log(num);
    num++;
}
console.log("__________________________________________________\n\n");
console.log("Ex 2: \n\n");
num = 10;
while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num);
        num++;
    } else {
        num++;
    }
}
console.log("__________________________________________________\n\n");
console.log("Ex 3: \n\n");
num = 300;
while(num<=333) { 
    if(num%2!==0) { 
        console.log(num);
        num++;
    }
    else {
        num++;
    }
}
console.log("__________________________________________________\n\n");
console.log("Ex 4: \n\n");
num = 5;
while(num<=50) {
    if(num%5==0&&num%3==0) {
        console.log(num);
        num++;
    }
    else {
        num++;
    }
}
