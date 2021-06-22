window.onload = function () {
    console.log("Ex 1: \n \n");
    for(i=-10;i<=19;i++){
        console.log(i);
    }
    console.log("__________________________________________________\n\n");
    console.log("Ex 2: \n\n");
    for(i=10;i<=40;i+=2){
        console.log(i);
    }
    console.log("__________________________________________________\n\n");
    console.log("Ex 3: \n\n");
    for(i=300;i<=333;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
    console.log("__________________________________________________\n\n");
    console.log("Ex 4: \n\n");
    for(i=5;i<=50;i++){
        if(i%5===0&&i%3===0){
            console.log(i);
        }
    }

}