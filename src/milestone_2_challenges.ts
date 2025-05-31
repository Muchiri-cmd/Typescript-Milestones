//Challenege  1:Sum of Positives
function sumOfPositives(array: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

//Challenge 2: Find Max value
function findMax(array: number[]): number {
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

//Challenge3 : Election Winner
interface Candidate {
  name: string;
  votes: number;
}
function findWinner(array: Candidate[]): Candidate {
  let highestNumberofVotes = 0;
  let winner: Candidate = array[0];

  for (let candidate of array) {
    if (candidate.votes > highestNumberofVotes) {
      highestNumberofVotes = candidate.votes;
      winner = candidate;
    }
  }
  return winner;
}
//Challenge4: Longest Word
function findLongestWord(array: string[]): string {
  let maxLength = array[0].length;
  let longestWord = "";

  array.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  });
  return longestWord;
}

//Challenge5: Count Properties
interface UserInfo {
  name: string;
  age: number;
  city: string;
}
function countProperties(object: UserInfo): number {
  // return Object.keys(object).length;
  let numberofProperties = 0;
  for (let prop in object) {
    numberofProperties += 1;
  }
  return numberofProperties;
}

//Challenge6: Filter By Length
function filterByLength(array: string[], minLength: number): string[] {
  let newArray: string[] = [];

  for (let item of array) {
    console.log(item);
    if (item.length >= minLength) {
      newArray.push(item);
    }
  }
  return newArray;
}

//Challenge7: Sum of Even Numbers
function sumEvenNumbers2(array: number[]): number {
  let sum = 0;
  for (let number of array) {
    if (number % 2 == 0) {
      //positive
      sum += number;
    }
  }
  return sum;
}

//Challenge8:Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array: number[]): number {
  let sumEvenNumbers = 0;
  let sumOddNumbers = 0;

  for (let number of array) {
    number % 2 === 0 ? (sumEvenNumbers += number) : (sumOddNumbers += number);
  }
  return sumEvenNumbers - sumOddNumbers;
}

//Challenge9:Count Truthy
function countTruthy(obj: Record<string, any>): number {
  let count = 0;
  for (const key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count;
}

//Challenge10:Average of Numbers
function average(array: number[]): number | void {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  let average = sum / array.length;
  if (average) return average;
  return 0;
}

//Challenge11: Linear Search
function linearSearch(array: number[], value: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

//Challlenge12: Reverse Linear Search
function reverseLinearSearch(array: number[], value: number): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) return i;
  }
  return -1;
}

//Test cases
console.log("==================Sum of Positives=====================");
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15

console.log("====================Find Maximum Value==================");
console.log(findMax([3, 7, 2, 9, 5])); // returns: 9

console.log("================Election Winner=========================");
const candidates = [
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

console.log(
  "========================Average of Numbers ======================",
);
console.log(average([2, 4, 6, 8])); // returns: 5
console.log(average([])); // returns: 0

console.log("=======================Linear Search====================");
console.log(linearSearch([5, 3, 7, 1, 4], 7)); // returns: 2
console.log(linearSearch([5, 3, 7, 1, 4], 10)); // returns: -1

console.log("=======================Reverse Linear Search====================");
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)); // returns: 5
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10)); // returns: -1
