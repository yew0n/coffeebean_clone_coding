$(document).ready(function() {

    $("#login").hide();
    $("#search_div").hide();

    /* 팝업 일단 안뜨게 해놓음 > 나중에 이거 없애고 #popup_close.click 주석처리를 풀어야함 */
    $(".emphasized").hide();
    $(".backlayer").hide();

/*
        $("#popup_close").click(function() {
            $(".emphasized").hide();
            $(".backlayer").hide();
        });
*/
    $("#bean_button").click(function() {
        if ($("#bean_img").attr("src") == "img/bean.png" || $("#bean_img").attr("src") == "img/bean.PNG") {
            $("#bean_img").attr("src", "img/bean_close.PNG");
        } else {
            $("#bean_img").attr("src", "img/bean.png");
        }
        $("#login").slideToggle(200);



    });

    $("#search").click(function() {
        console.log($("#search_img").attr("src")+"클릭 앞");
        if ($("#search_img").attr("src") == "img/search.PNG" || $("#search_img").attr("src") == "img/search.png") {
            $("#search_img").attr("src", "img/search_close.PNG");
        } else {
            $("#search_img").attr("src", "img/search.png");
        }
        $("#search_div").slideToggle(200);
        console.log($("#search_img").attr("src")+"클릭 뒤");
    });

    $(".mdsimg").hover(
        function() {
            console.log("hover 들어온다.");
            $(this).parent().parent().find(".quickview").toggleClass("hidden");
        }
    );
})