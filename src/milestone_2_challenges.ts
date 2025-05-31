//Challenege  1:Sum of Positives
function sumOfPositives(array: number[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

//Test cases
console.log("Sum of Positives");
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15)
