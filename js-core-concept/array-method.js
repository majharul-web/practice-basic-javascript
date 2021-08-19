//<-- =----------------- file name:-----------------= -->array-method.js

// <-- 01:Check isArray, indexOf, includes, concat -->

function getMegaFriend(friends) {
  // use isArray for error handling-->
  if (Array.isArray(friends) == false) {
    console.log('please give valid value');
  }
  let megaFriend = friends[0];
  for (const friend of friends) {
    if (friend.length > megaFriend.length) {
      megaFriend = friend;
    }
  }
  return megaFriend;
}
const friends = ['jony', 'Majahrul', 'amirul', 'sumaiya', 'mithu', 'ritu'];
const myBuddy = getMegaFriend(friends);
// console.log(myBuddy);

// use indexOf()-->
if (friends.indexOf('jony') != -1) {
  //   console.log('jony exist in array');
}

// use includes()-->
if (friends.includes('sumaiya')) {
  //   console.log('sumaiya is includes');
}

const salaSali = ['rakib', 'sakib', 'rotna', 'megha', 'dina'];
const comBain = friends.concat(salaSali);
// console.log(comBain);

//<-- ------------ using slice, splice ------------ -->
// slice-->
const afterSlice = salaSali.slice(1, 3);
// console.log(afterSlice);

// splice-->
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 16];

const SpliceOnlyDelete = number.splice(4, 3);

const SpliceWithDeleteAndAdd = number.splice(5, 3, 90, 45, 455);

const SpliceWithOnlyAdd = number.splice(5, 0, 90, 45, 455);

console.log(SpliceWithOnlyAdd);
console.log(number);
