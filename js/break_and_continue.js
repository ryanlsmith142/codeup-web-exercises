"use strict";

var userNumber;
var parsedInput;

do {
    userNumber = prompt("Give me an odd number!");
    parsedInput = parseInt(userNumber);
}
while(userNumber % 2 === 0 || parsedInput < 0 || isNaN(parsedInput));

    console.log("Number to skip is: " + userNumber);

    for (var i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            continue;
        }

        if (parseFloat(userNumber) === i) {
            console.log('Yikes! Skipping number: ' + i);
        } else {
            console.log("Here is an odd number: " + i);
        }

        if (i >= 49) {
            break;
        }
    }
