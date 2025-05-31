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
    // return Object.keys(object).length;
    var numberofProperties = 0;
    for (var prop in object) {
        numberofProperties += 1;
    }
    return numberofProperties;
}
//Challenge6: Filter By Length
function filterByLength(array, minLength) {
    var newArray = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        console.log(item);
        if (item.length >= minLength) {
            newArray.push(item);
        }
    }
    return newArray;
}
//Challenge7: Sum of Even Numbers
function sumEvenNumbers2(array) {
    var sum = 0;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var number = array_3[_i];
        if (number % 2 == 0) {
            //positive
            sum += number;
        }
    }
    return sum;
}
//Challenge8:Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array) {
    var sumEvenNumbers = 0;
    var sumOddNumbers = 0;
    for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
        var number = array_4[_i];
        number % 2 === 0 ? (sumEvenNumbers += number) : (sumOddNumbers += number);
    }
    return sumEvenNumbers - sumOddNumbers;
}
//Challenge9:Count Truthy
function countTruthy(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
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
console.log("=======================Filter by Length=====================");
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // returns: ["giraffe", "hippo", "elephant"]
console.log("==================Sum of Even Numbers========================");
console.log(sumEvenNumbers2([1, 2, 3, 4, 5, 6])); // returns: 12  // because 2 + 4 + 6 = 12
console.log("=======Difference Between Sum of Even and Odd Numbers==========");
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); // returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3
console.log("=======================Count Truthy ============================");
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })); // returns: 2  // "hello" and 42 are truthy
