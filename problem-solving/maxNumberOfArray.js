
// get max number of a array

function arrayMax(age) {
    let largest = age[0];
    for (let i = 0; i < age.length; i++) {
        let element = age[i];
        if (element > largest) {
            largest = element;

        }


    }
    return largest;


}
const ages = [85, 78, 47, 21, 25, 45];
const oldest = arrayMax(ages);
console.log(oldest);