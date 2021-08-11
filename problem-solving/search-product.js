// search-product.js
const products = [
  { name: 'walton phone', price: 7000 },
  { name: 'walton laptop', price: 37000 },
  { name: 'apple phone', price: 87000 },
  { name: 'hp laptop', price: 72000 },
  { name: 'samsung phone', price: 15000 },
  { name: 'assus laptop', price: 35000 },
  { name: 'samsung watch', price: 2000 },
  { name: 'apple watch', price: 1000 },
];

function searchProduct(productList, searchText) {
  let matcheds = [];
  for (const product of productList) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matcheds.push(product);
    }
  }
  return matcheds;
}
const matched = searchProduct(products, 'phone');
console.log(matched);
