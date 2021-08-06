
// using if-else


function getGrade(avg) {



    if (avg >= 80 && avg <= 100) {
        return console.log("your average is" + " " + avg + "& Your Grade is A+")
    }

    else if (avg >= 70 && avg <= 79) {
        return console.log("your average is" + " " + avg + "& Your Grade is A")
    }
    else if (avg >= 60 && avg <= 69) {
        return console.log("your average is" + " " + avg + "& Your Grade is A-")
    }
    else if (avg >= 50 && avg <= 59) {
        return console.log("your average is" + " " + avg + "& Your Grade is B")
    }
    else if (avg >= 40 && avg <= 49) {
        return console.log("your average is" + " " + avg + "& Your Grade is B-")
    }
    else if (avg >= 33 && avg <= 39) {
        return console.log("your average is" + " " + avg + "& Your Grade is C")
    }

    else {
        return console.log("your average is" + " " + avg + "& Your are Failled")
    }

}


// let marks = [70, 80, 58, 45, 98, 87, 85, 67]







let bangla = 82;
let english = 78;
let math = 61;
let biology = 56;
let physics = 75;
let chemistry = 67;
let ict = 45;
let average = ((bangla + english + math + biology + physics + chemistry + ict) / 7);
// let resultOfStudent = getGrade(average);
getGrade(average);