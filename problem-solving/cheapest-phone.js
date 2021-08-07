// cheapest-phone

let phones = [
    { name: "samsung", price: 40500, ram: 4 },
    { name: "xiaomi", price: 12500, ram: 4 },
    { name: "oppo", price: 7500, ram: 4 },
    { name: "walton", price: 14500, ram: 4 },
    { name: "lg", price: 10500, ram: 4 }
]
let cheapest = phones[0];
for (const phone of phones) {
    if (cheapest.price > phone.price) {
        cheapest = phone;
    }

}
console.log(cheapest)
