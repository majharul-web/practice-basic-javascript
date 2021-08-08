// positiveNumberOfArray.js
const numbers = [10, 20, 25, 30, 46, 0, -58, 45];
function positiveNumberOfArray() {
    let positiveNumber = [];
    for (const number of numbers) {
        if (number > 0) {
            positiveNumber.push(number);
        }
        else {
            break;
        }
    }
    return positiveNumber;
}
const positiveNumberArray = positiveNumberOfArray(numbers);
console.log(positiveNumberArray);
