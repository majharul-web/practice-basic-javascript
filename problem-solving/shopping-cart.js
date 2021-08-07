// shopping-cart.js

let cart = [
    { name: "shirt", price: 500, quantity: 2 },
    { name: "laptop", price: 55500, quantity: 1 },
    { name: "watch", price: 5200, quantity: 4 },
    { name: "mobile", price: 25500, quantity: 1 }
]
let totalCost = 0;
for (product of cart) {
    const perCost = product.price * product.quantity;
    totalCost = totalCost + perCost;
}
console.log(totalCost);
