(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     *
     * var planetsArray = planetsString.split(|);
     * console.log(planetsArray);
     * console.log planetsArray to check your work
     */


    // var planetsArray = planetsString.split("|");
    //
    // console.log(planetsArray);

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?




     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsString = planetsArray.join(' <br> ');
    //
    // console.log(planetsString);

    // var planetsList = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //
    // var planetsListArray = planetsList.split("|")
    //
    // console.log(planetsListArray.length);
    //
    // for(var i = 0; i <= planetsListArray.length; i++) {
    //     planetsListArray.unshift("<li>");
    // }
    //
    // console.log(planetsListArray);



//    Mark Strange Solution

    // var planetsSplit = planetsString.split("|");
    //
    // console.log(planetsSplit);
    //
    // // var planetsBreak = "Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune"
    // // console.log(planetsBreak);
    //
    // ////////////////////////////// Bonus //////////////////////////////////
    //
    // for (var i=planetsSplit.length; i--;) {
    //     planetsSplit[i] = '<li>' + planetsSplit[i] + '</li>';
    // }
    //
    // planetsSplit.unshift('<ul>');
    // planetsSplit.push('</ul>');
    //
    // console.log(planetsSplit);
    // var planetsList = planetsSplit.join('');
    //
    // document.body.innerHTML = planetsList;


//    LAURA SOLUTION

    // planetsString = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";


})();
