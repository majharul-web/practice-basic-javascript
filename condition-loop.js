// else if condition

let a = 5, b = 10, c = 15;
if (a >= b && a >= c) {
    console.log("largest number is a:" + " " + a);
}
else if (b >= a && b >= c) {
    console.log("largest number is b:" + " " + b);
}
else {
    console.log("largest number is c:" + " " + c);
}


// While loop
let i = 7;
while (i <= 19) {
    console.log("odd number is between 7-17 is:" + " " + i)
    i = i + 2
}

// show all element of array using for loop 
let friends = ["jony", "rony", "sony", "mony"];
for (let i = 0; i < friends.length; i++) {
    let element = friends[i];
    console.log(element)
}

// show grater than 80 all element of array using for loop
let numbers = [65, 70, 80, 89, 100, 54, 84];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > 80) {
        console.log(element)
    }
}


