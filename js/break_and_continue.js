"use strict";

function isNumeric(input) {
    return !isNaN(parseFloat(input));
}

// while ()
// do {
//     var numberSkip = prompt("Give me an odd number");
// // } while (isNaN(numberSkip));
//
// console.log(isNumeric("3"));

var userNumber = prompt("give me a number");

console.log(isNumeric(userNumber));

while(isNumeric(userNumber)) {
    console.log(userNumber);
}