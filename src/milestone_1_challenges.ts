//Challenge 1: Return th sum of Two Numbers
function addition(num1: number, num2: number): number {
  return num1 + num2;
}

//Challenge2: Convert Minutes into seconds
function convert(int: number): number {
  return int * 60;
}

//Challenge 3: Perimeter of a Rectangle
function findPerimeter(length: number, width: number): number {
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

//Challenge7: BMI Calculator
function calculateBMI(weight: number, height: number): string {
  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    return `Your BMI is ${BMI.toFixed(1)} - Underweight`;
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return `Your BMI is ${BMI.toFixed(1)} - Normal weight`;
  } else if (BMI >= 25 && BMI < 29.9) {
    return `Your BMI is ${BMI.toFixed(1)} - Overweight`;
  } else {
    return `Your BMI is ${BMI.toFixed(1)} - Obesity`;
  }
}

//Challenge 8: Greeting Based on Time
function greetUser(name: string, hour: number): string {
  if (hour >= 5 && hour <= 12) {
    return `Good Morning, ${name}!`;
  } else if (hour > 12 && hour <= 17) {
    return `Good Afternoon, ${name}!`;
  } else if (hour > 17 && hour <= 21) {
    return `Good Evening, ${name}!`;
  }
  return `Good Night, ${name}!`;
}

//Challenge 9: FizzBuzz
function fizzBuzzCheck(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num.toString();
}

//Challenge 10: Perimeter 2
function perimeter(letter: string, num: number): number {
  return letter === "s" ? 4 * num : letter === "c" ? 6.28 * num : 0;
}

//Challenge 11: Sum of Evven Numbers
function sumEvenNumbers(n: number): number {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

//Test cases
console.log("Sum of 2 Numbers");
console.log(addition(3, 5)); //8
console.log(addition(-6, 9)); // 3)

console.log("Convert Minutes into Seconds");
console.log(convert(5)); //300
console.log(convert(2)); //120

console.log("Perimeter of a Rectangle");
console.log(findPerimeter(6, 7)); //30
console.log(findPerimeter(20, 10)); //20

console.log("Check Negative");
console.log(isNegative(-23)); //true
console.log(isNegative(55)); //false

console.log("Can I Drive");
console.log(canDrive("Jane", 22)); // Jane is old enough to drive
console.log(canDrive("June", 12)); // June is not old enough to drive yet

console.log("Largest Number");
console.log(findLargest(5, 9, 3)); //9
console.log(findLargest(10, 10, 10)); // 10
console.log(findLargest(-1, -5, -3)); // -1

console.log("BMI Calculator");
console.log(calculateBMI(68, 1.75)); //Your BMI is 22.2 - Normal weight
console.log(calculateBMI(85, 1.8)); // Your BMI is 26.2 - Overweight

console.log("Greeting Based on Time");
console.log(greetUser("Alice", 10)); // Good Morning, Alice!
console.log(greetUser("Bob", 15)); // Good Afternoon, Bob!
console.log(greetUser("Charlie", 19)); // Good Evening, Charlie!
console.log(greetUser("Dave", 23)); // Good Night, Dave!

console.log("FizzBuzz Challenge");
console.log(fizzBuzzCheck(3)); // "Fizz"
console.log(fizzBuzzCheck(10)); // "Buzz"
console.log(fizzBuzzCheck(15)); // "FizzBuzz"
console.log(fizzBuzzCheck(7)); // "7")

console.log("Perimeter 2");
console.log(perimeter("s", 7)); //28)
console.log(perimeter("c", 4)); //25.12)

console.log("Sum of Even Numbers");
console.log(sumEvenNumbers(6)); // 12  (2 + 4 + 6))
console.log(sumEvenNumbers(10)); // 30  (2 + 4 + 6 + 8 + 10))
console.log(sumEvenNumbers(5)); // 6   (2 + 4))
