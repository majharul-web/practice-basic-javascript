// convertFeetToInch.js

function centimeterToMeter(cem) {
    // input handling
    if (typeof (cem) === 'string') {
        return 'please enter a number value'
    }
    else if (cem <= 0) {
        return 'please enter grater than 1 value'
    }

    // main part
    const meter = cem / 100;
    return cem + 'cem is =' + ' ' + meter + 'meter';


}

const resultOfInch = centimeterToMeter(500);
console.log(resultOfInch);