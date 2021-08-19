// <-- File name:function-argument.js-->

// example 01: -->
function addNumber() {
  let result = 0;
  for (const arg of arguments) {
    result = result + arg;
  }
  return result;
}
const sum = addNumber(10, 20, 25, 27);
console.log(sum);

// example 02: -->
function getName() {
  let myName = '';
  for (part of arguments) {
    myName = myName + part + ' ';
  }
  return myName;
}
const fullName = getName('Mr', 'Abdur', 'Rahim', 'mondole');
console.log(fullName);
