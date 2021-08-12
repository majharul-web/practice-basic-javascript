// variable and operator

// typeOf(number)
var a = 10;
let b = 15;
const sum = a + b;
console.log(sum)
console.log(typeof (sum));

// typeOf(string)
const firstName = "Majharul";
const lastName = "Islam";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof (fullName));

// typeOf boolean
const baseValue = 10;
const trueValue = 10;
const falseValue = "10";

console.log(baseValue == trueValue);
console.log(trueValue === falseValue);


// use +,-,*,/,%,++,-- (arithmetic) operator
const addition = a + b;
console.log(addition);

const sub = a - b;
console.log(sub);

const multiplication = a * b;
console.log(multiplication);

const division = a / b;
console.log(division);

const modulation = 16 % 3;
console.log(modulation);

const increment = a++;
console.log(increment);

const decrement = b--;
console.log(decrement);



// use <, >, ==, !=, <=, >= (comparison operator)
console.log(a > b);
// a is grater than b

console.log(a < b);
// a is less than b

console.log(a == b);
// a is equal to b
console.log(a != b);
// a is not equal to b

console.log(a <= b);
// a is grater than or equal to b

console.log(a >= b);
// a is less than or equal to b



// use && , || (logical operator)
console.log(a < b && a == b);
// every condition is true then ex

console.log(a < b || a == b);
// only or every condition is true then ex
