// jungle-wind.js
let first10 = 10;
let second10 = 50;
let last = 75;

function getJungleAnimale(num) {
    if (num <= 10) {
        return first10;
    }
    else if (num <= 20) {
        const a = 10 * first10;
        const b2 = num - 10;
        const b = b2 * second10;
        const r2 = a + b;
        return r2;
    }
    else {
        const a = 10 * first10;
        const b = 10 * second10;
        const c2 = num - 20;
        const c = c2 * last;
        const r3 = a + b + c;
        return r3;
    }

}

let result = getJungleAnimale(25);
console.log(result);