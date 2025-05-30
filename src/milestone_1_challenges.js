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
