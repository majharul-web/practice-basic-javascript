// <-- ------------ File Name:array-shorted.js ------------ -->
// string element sorted in array->
const salaSali = ['rakib', 'sakib', 'rotna', 'megha', 'dina'];

// const sortedSalaSli = salaSali.sort();

const revers = salaSali.reverse().sort();

const reversWithSort = salaSali.reverse().sort();
// console.log(reversWithSort);

//number element sort in array
const number = [1, 2, 111, 447, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 16];
const sortNumber = number.sort(function (a, b) {
  return a - b;
  //sort array descending:use return b-a
});
console.log(sortNumber);
