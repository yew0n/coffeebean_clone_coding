/*global $ */
$(document).ready(function () {

    "use strict";


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)


    $(".menu > ul > li").hover(
        function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeIn(200);
                e.preventDefault();
            }
        }, function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeOut(200);
                e.preventDefault();
            }
        }
    );
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function() {
        //no more overlapping menus
        //hides other children menus when a list item with children menus is clicked
        var thisMenu = $(this).children("ul");
        var prevState = thisMenu.css('display');
        $(".menu > ul > li > ul").fadeOut();
        if ($(window).width() < 943) {
            if(prevState !== 'block')
                thisMenu.fadeIn(200);
        }
    });

});
