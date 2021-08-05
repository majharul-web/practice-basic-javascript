function getInterest(taka, year) {
    var ret = 5;
    let total = (taka * year * ret) / 100
    return total;
}

let result = getInterest(50000, 3,);
console.log("your interest =" + result + " " + "-/");

// let total = (500 * 5 * 3) / 100;
// console.log(total)