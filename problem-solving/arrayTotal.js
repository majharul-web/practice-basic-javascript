// get array total of array

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;

    }
    return sum;


}
const numbers = [85, 78, 47, 21, 25, 45];
const arrayTotalResult = arrayTotal(numbers);
console.log(arrayTotalResult);