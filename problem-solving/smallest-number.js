// get small number in 3 number

function findLargestNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3
    }

}
var smallNumber = findLargestNumber(8, 12, 4);
console.log(smallNumber);