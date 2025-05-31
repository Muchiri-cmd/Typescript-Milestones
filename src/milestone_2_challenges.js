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
function findWinner(array) {
    var highestNumberofVotes = 0;
    var winner = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var candidate = array_1[_i];
        if (candidate.votes > highestNumberofVotes) {
            highestNumberofVotes = candidate.votes;
            winner = candidate;
        }
    }
    return winner;
}
//Challenge4: Longest Word
function findLongestWord(array) {
    var maxLength = array[0].length;
    var longestWord = "";
    array.forEach(function (word) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    });
    return longestWord;
}
function countProperties(object) {
    return Object.keys(object).length;
}
//Test cases
console.log("==================Sum of Positives=====================");
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15
console.log("====================Find Maximum Value==================");
console.log(findMax([3, 7, 2, 9, 5])); // returns: 9
console.log("================Election Winner=========================");
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
console.log(findWinner(candidates)); // returns: { name: "Bob", votes: 75 }
console.log("====================Longest word==========================");
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"])); // returns: "grapefruit"
console.log("===================Count Properties========================");
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" })); // returns: 3
