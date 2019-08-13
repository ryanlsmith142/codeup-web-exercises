"use strict";

var userNumber = prompt("give me an odd number!");

for (var i = 1; 1 <= 50; i++) {
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