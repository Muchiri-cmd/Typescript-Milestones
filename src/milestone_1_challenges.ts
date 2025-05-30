//Challenge 1: Return th sum of Two Numbers
function addition(num1: number, num2: number): number {
  return num1 + num2;
}

//Challenge2: Convert Minutes into seconds
function convert(int: number): number {
  return int * 60;
}

//Challenge 3: Perimeter of a Rectangle
function perimeter(length: number, width: number): number {
  return 2 * (length + width);
}

//Test cases
console.log("Sum of 2 Numbers");
console.log(addition(3, 5)); //8
console.log(addition(-6, 9)); // 3)

console.log("Convert Minutes into Seconds");
console.log(convert(5)); //300
console.log(convert(2)); //120

console.log("Perimeter of a Rectangle");
console.log(perimeter(6, 7)); //30
console.log(perimeter(20, 10)); //20
