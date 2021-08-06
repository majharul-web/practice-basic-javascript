// let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo);

function getFibo(num) {
    if (typeof num != "number") {
        return "please give number"
    }
    else if (num < 2) {
        return "please give number geter than 1"
    }
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}

let resultFibo = getFibo(15);
console.log(resultFibo);