// removeDuplicateNumber of Array
let numbers = [1, 5, 2, 5, 2, 1, 6, 8, 5, 8, 4, 6, 4, 5, 7, 9,];


function removeDuplicateNumber(numbers) {
    let unique = [];
    for (const element of numbers) {

        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }

    }
    return unique;

}

let resultOfDuplicate = removeDuplicateNumber(numbers);
console.log(resultOfDuplicate);