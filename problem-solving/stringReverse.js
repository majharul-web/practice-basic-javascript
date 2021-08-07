let gretings = 'Hello';
function stringReverse(text) {
    let reversString = ""
    for (letter of text) {
        reversString = letter + reversString;
    }
    return reversString;
}

let result = stringReverse(gretings);
console.log(result);