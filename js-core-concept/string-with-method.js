//fileName: string-with-method.js

// 1:simple string declare
let myName = 'Md Majahrul Islam';
// console.log(myName);

// 2:use toLowerCase method same as toUppercase
let userInput = 'Majharul Islam';
let saveUserName = 'majharul islam';
if (userInput.toUpperCase() == saveUserName.toUpperCase()) {
  console.log('Valid user');
} else {
  console.log('User not valid');
}

// 3:Apply Search includes, indexOf, startsWith, endsWith:-

const products = [
  'dell i5 laptop',
  'apple iPhone XI',
  'hp i3 laptop',
  'apple latest watch',
  'apple highQuality pad',
  'dell laptop battery',
  'lenovo i7 Laptop',
  'walton Laptop',
];
const myProducts = [];
const searching = 'laptop';
for (const product of products) {
  //indexOf-->
  /* if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    myProducts.push(product);
  } */

  //includes-->
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    myProducts.push(product);
  }
}
console.log(myProducts);

//startsWith same to endsWith-->
const myApple = [];
const searchText = 'Apple';
for (product of products) {
  if (product.toLowerCase().startsWith(searchText.toLowerCase())) {
    myApple.push(product);
  }
}
console.log(myApple);

// 4:How to split, slice, substr, substring, concat, join
const song = 'amar sonar bangla ami tomay valobashi';

//split-->
// const word = song.split(' ');
const word = song.split('a');
console.log(word);

//slice-->
const smallSlice = song.slice(5, 13);
console.log(smallSlice);

//join-->
const friends = ['jony', 'rony', 'sony'];
// const all = friends.join('');
// const all = friends.join(' ');
const all = friends.join(', ');
console.log(all);

//concat-->
const firstName = 'Majharul';
const lastName = 'Islam';
const fullName = firstName.concat(' ').concat(lastName);
console.log(fullName);
