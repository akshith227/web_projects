function printReverse(array) {
    var toReturn = [];
    array.forEach(function (item) {
        toReturn.unshift(item);
    });
    return toReturn;
}

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}


function sumArray(array) {
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

function max(array) {
    var max = array[0];
    array.forEach(element => {
        if (element > max) {
            max = element;
        } else {
            //pass
        }
    });
    return max;

}