// removeDuplicateName of Array

let names = ["babul", "habul", "kabul", "rabul", "babul", "kabul", "rebul", "habul"];


function removeDuplicateName(names) {
    let unique = [];
    for (const element of names) {

        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }

    }
    return unique;

}

let resultOfDuplicate = removeDuplicateName(names);
console.log(resultOfDuplicate);