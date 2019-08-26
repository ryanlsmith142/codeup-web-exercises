$(document).ready(function () {




    // var element = $('#li-item1').html();
    //
    // alert(element);

    // $('.codeup').css('border', 'red 1px solid');


    // $('#title, #paragraph, #ul-list, #div1').css('border', '5px black solid');

    // $('li').css('font-size', '20px');
    //
    // $('h1, p, li').css('color', 'blue');
    //
    // var title = $('h1').html();
    //
    // alert(title);

    $('h1').click(function() {
        $(this).css('background', 'red');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(function() {
        $(this).css('color', 'red');
    }, //End of first function
        function() {
        $(this).css('color', 'black');
        }
    );



});
