//Challenege  1:Sum of Positives
function sumOfPositives(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
//Challenge 2: Find Max value
function findMax(array) {
    var maxNumber = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
//Test cases
console.log("Sum of Positives");
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15
console.log("Find Maximum Value");
console.log(findMax([3, 7, 2, 9, 5])); // returns: 9
