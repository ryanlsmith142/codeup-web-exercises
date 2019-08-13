function showMultiplicationTable(number) {
    for(var x = 1; x <= 10; x++) {
        console.log(number + " x " + x + " = " + (number * x));
    }
}

// showMultiplicationTable(7);

// This is how you get a random number between 50 and 100
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// for (var i = 1; i <= 10; i++) {
//     var randomNumber = Math.floor(Math.random() * 181) + 20;
//     if(randomNumber % 2 === 0) {
//         console.log(randomNumber + ' is even');
//     } else {
//         console.log(randomNumber + ' is odd');
//     }
// }

for(var x = 1; x <= 9; x++) {

    var output = '';

    for (var y = 0; y < x; y++)
    {
        output = output + x;
    }

    console.log(output);

}

//OTHER SOLUTION

// var x = 1;
//
// for (var j = 1; j <= 9; j++) {
//     console.log(j * x);
//     x += "1";
// }

//OTHER SOLUTION

// for (var i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }

    for(var i = 100; i > 0;) {
        console.log(i);
        i = i - 5;
    }

