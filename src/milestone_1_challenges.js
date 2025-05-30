//Challenge 1: Return th sum of Two Numbers
function addition(num1, num2) {
    return num1 + num2;
}
//Challenge2: Convert Minutes into seconds
function convert(int) {
    return int * 60;
}
//Challenge 3: Perimeter of a Rectangle
function perimeter(length, width) {
    return 2 * (length + width);
}
//Challenge4:Check Negative
function isNegative(num) {
    if (num < 0) {
        return true;
    }
    return false;
}
//Challenge5: Can i Drive
function canDrive(name, age) {
    if (age >= 18) {
        return "".concat(name, " is old enough to drive");
    }
    else {
        return "".concat(name, " is not old enough to drive");
    }
}
//Challenge 6: Largest Number
function findLargest(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}
//Challenge7: BMI Calculator
function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        return "Your BMI is ".concat(BMI.toFixed(1), " - Underweight");
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        return "Your BMI is ".concat(BMI.toFixed(1), " - Normal weight");
    }
    else if (BMI >= 25 && BMI < 29.9) {
        return "Your BMI is ".concat(BMI.toFixed(1), " - Overweight");
    }
    else {
        return "Your BMI is ".concat(BMI.toFixed(1), " - Obesity");
    }
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
console.log(canDrive("Jane", 22)); // Jane is old enough to drive
console.log(canDrive("June", 12)); // June is not old enough to drive yet
console.log("Largest Number");
console.log(findLargest(5, 9, 3)); //9
console.log(findLargest(10, 10, 10)); // 10
console.log(findLargest(-1, -5, -3)); // -1
console.log("BMI Calculator");
console.log(calculateBMI(68, 1.75)); //Your BMI is 22.2 - Normal weight
console.log(calculateBMI(85, 1.8)); // Your BMI is 26.2 - Overweight
