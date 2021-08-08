// convertFeetToInch.js

function feetToInch(feet) {
    // input handling
    if (typeof (feet) === 'string') {
        return 'please enter a number value'
    }
    else if (feet <= 0) {
        return 'please enter grater than 1 value'
    }

    // main part
    const inch = feet * 12;
    return feet + 'feet is =' + ' ' + inch + 'inch';


}

const resultOfInch = feetToInch(5);
console.log(resultOfInch);