// get min number of a array


function minNumberOfArray(age) {
    let small = age[0];
    for (let i = 0; i < age.length; i++) {
        let element = age[i];
        if (element < small) {
            small = element;
        }
    }
    return small;

}
let ages = [14, 12, 45, 74, 9, 25];
let smallest = minNumberOfArray(ages);
console.log(smallest);