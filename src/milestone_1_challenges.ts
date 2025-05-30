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
//Challenge4:Check Negative
function isNegative(num: number): boolean {
  if (num < 0) {
    return true;
  }
  return false;
}

//Challenge5: Can i Drive
function canDrive(name: string, age: number): string {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive`;
  }
}

//Challenge 6: Largest Number
function findLargest(a: number, b: number, c: number): number {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
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

console.log("Check Negative");
console.log(isNegative(-23)); //true
console.log(isNegative(55)); //false

console.log("Can I Drive");
console.log(canDrive("Jane", 22)); // Jane is old enough to drive)
console.log(canDrive("June", 12)); // June is not old enough to drive yet)

console.log("Largest Number");
console.log(findLargest(5, 9, 3)); //9
console.log(findLargest(10, 10, 10)); // 10)
console.log(findLargest(-1, -5, -3)); // -1)
