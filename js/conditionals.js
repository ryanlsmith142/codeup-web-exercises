"use strict";

/**
 * TODO:
 * Function 1
 *
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number.
 *
 * If they click 'Ok', prompt the user for a
 * number,
 *
 *
 * then use 3 separate alerts to tell the user:
 *
 * Function 2
 *
 * - whether the number is even or odd
 *
 * function 3
 *
 * - what the number plus 100 is
 *
 * Function 4
 *
 * - if the number is negative or positive
 *
 * Function 5
 *
 * if what the user enters is not a number, use an alert to tell them that,
 *
 * and
 *
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */



//What is the problem question?

// Is the number even or odd, what the number plus 100 is, and if the number is negative or positive

//What is the input?

//a number

//What is the output?

//Alerts that outputs strings and number

//What are the conditions?

//THIS IS FUNCTION ONE

function enterNumber() {
     if (confirm("Would you like to enter a number?")) {
         return prompt("Please enter a number");
     }
}

var userEnteredNumber = Number(enterNumber());
//
//
function isNumber(userNumber) {
    if(isNaN(userNumber)) {
        return "Hey that's not a number";
    } else {
        return "Hey that's a number";
    }
}
//
alert(isNumber(userEnteredNumber));
//
// //THIS IS FUNCTION TWO
//
function evenAlerts(userNumber) {
    if(userNumber % 2 === 0) {
        return "That's an even number!";
    } else {
        return "That's an odd number!";
    }
}
//
alert(evenAlerts(userEnteredNumber));
//
//
// //THIS IS FUNCTION THREE
//
function hundredPlusAlert(userNumber) {
    var hundredPlus = 100 + userNumber;
    return "This is your number plus 100: " + hundredPlus;
}

alert(hundredPlusAlert(userEnteredNumber));
//
// //THIS IS FUNCTION FOUR
//
function posOrNegAlert(userNumber) {
    if(Math.sign(userNumber) === 1) {
        return "It's a positive number";
    } else {
        return "It's a negative number";
    }
}

alert(posOrNegAlert(userEnteredNumber));

alert(posOrNegAlert(-1));







/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor`
 *
 * that accepts a string
 *
 * that is a color name as input.
 *
 * This function should return a message
 *
 * that related to that
 * color.
 *
 * Only worry about the colors defined above,
 *
 * if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 *
 * console.logging the function's return value
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(userColor) {
//
//     // return a message related to the colors
//     // if color is not one listed {
//     //     return a message that says "That isn't a color we are dealing with";
//     // }
//     if (userColor === "red") {
//         return "Apples are red! Well some of them at least";
//     } else if (userColor === "orange") {
//         return "Orange popsicles are the best!";
//     } else if (userColor === "yellow") {
//         return "Watch out for yellow bananas, they are tripping hazards";
//     } else if (userColor === "green") {
//         return "Money is green and I like money";
//     } else if (userColor === "indigo") {
//         return "Indigo is basically purple";
//     } else if (userColor === "violet") {
//         return "Violet is also basically purple";
//     } else {
//         return "Hey there buddy, that's not a color we're dealing with";
//     }
//
// }
//
// console.log(analyzeColor(2));


// Don't change the next two lines!

// These lines create two variables for you:

// - `colors`: a list of the colors of the rainbow

// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
    // console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//     function analyzeColor(userColor) {
//         switch(userColor) {
//             case "red":
//                 return "Apples are red! Well some of them at least";
//             case "orange":
//                 return "Orange popsicles are the best!";
//             case "yellow":
//                 return "Watch out for yellow bananas, they are tripping hazards";
//             case "green":
//                 return "Money is green and I like money";
//             case "indigo":
//                 return "Indigo is basically purple";
//             case "Violet":
//                 return "Violet is also basically purple";
//             default:
//                 return "Hey there buddy, that's not a color we're dealing with";
//         }
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads,
 *
 * and pass the input from the
 * user to your `analyzeColor` function.
 *
 * Alert the return value from your
 * function to show it to the user.
 */
// var promptedColorChoice = prompt("Which color in the rainbow is your favorite? Here's a reminder of the colors: red, orange, yellow, green, indigo, violet");
//
// function analyzeColor(userColor) {
//     switch(userColor) {
//         case "red":
//             return "Apples are red! Well some of them at least";
//         case "orange":
//             return "Orange popsicles are the best!";
//         case "yellow":
//             return "Watch out for yellow bananas, they are tripping hazards";
//         case "green":
//             return "Money is green and I like money";
//         case "indigo":
//             return "Indigo is basically purple";
//         case "Violet":
//             return "Violet is also basically purple";
//         default:
//             return "Hey there buddy, that's not a color we're dealing with";
//     }
// }
//
// alert(analyzeColor(promptedColorChoice));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart,
 *
 * each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 *
 * If your lucky number is 0 you have
 * no discount,
 *
 * if your lucky number is 1 you'll get a 10% discount,
 *
 * if it's 2,
 * the discount is 25%,
 *
 * if it's 3, 35%,
 *
 * if it's 4, 50%,
 *
 * and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal`
 *
 * that accepts a lucky number and total
 * amount,
 *
 * and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return "No discount";
//     } else if (luckyNumber === 1) {
//         return totalAmount - (totalAmount * .10);
//     } else if (luckyNumber === 2) {
//         return totalAmount - (totalAmount * .25);
//     } else if (luckyNumber === 3) {
//         return totalAmount - (totalAmount * .35);
//     } else if (luckyNumber === 4) {
//         return totalAmount - (totalAmount * .50);
//     } else if (luckyNumber === 5) {
//         return 0;
//     } else {
//         return "Hey there buckaroo that doesn't look like a lucky number";
//     }
// }
//
// console.log(calculateTotal(1, 100)); // 90
// console.log(calculateTotal(0));
// console.log(calculateTotal("Hey I'm a string", "Hey I'm another string"));
// console.log(calculateTotal(11, 12));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 *
 * Prompt the user for their total bill,
 *
 * then use your `calculateTotal` function
 *
 * and alerts to display to the user what their lucky number was,
 *
 * what their
 * price before the discount was,
 *
 * and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = +prompt("What was your total bill?");

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return "No discount";
    } else if (luckyNumber === 1) {
        return totalAmount - (totalAmount * .10);
    } else if (luckyNumber === 2) {
        return totalAmount - (totalAmount * .25);
    } else if (luckyNumber === 3) {
        return totalAmount - (totalAmount * .35);
    } else if (luckyNumber === 4) {
        return totalAmount - (totalAmount * .50);
    } else if (luckyNumber === 5) {
        return 0;
    } else {
        return "Hey there buckaroo that doesn't look like a lucky number";
    }
}

var discountedPrice = calculateTotal(luckyNumber, totalAmount);



function userAlert(luckyNumber, totalAmount, discountedPrice) {
    alert("Your lucky number was: " + luckyNumber);

    alert("Your total price before discount was $ " + totalAmount);

    alert("Your discounted price is $ " + discountedPrice);

}

userAlert(luckyNumber, totalAmount, discountedPrice);