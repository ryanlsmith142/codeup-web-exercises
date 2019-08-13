"use strict";

// var num = 2;
//
//     while (num <= 65536) {
//         console.log(num);
//         num = (num * 2);
//     }


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5




do {
    var customerCones = Math.floor(Math.random() * 5) + 1;
    if(customerCones > allCones) {
        console.log("Cannot sell you " + customerCones + " I only have " + allCones);
    } else {
        console.log(customerCones + " cone(s) sold!")
        allCones = allCones - customerCones;
    }
    console.log(allCones);
} while (allCones > 0)

console.log("Yay, I sold them all");



