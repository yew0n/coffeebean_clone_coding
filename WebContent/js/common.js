$(document).ready(function() {



    $("#popup_close").click(function() {
        $(".emphasized").hide();
        $(".backlayer").hide();
    });

    $(".mdsimg").hover(
        function() {
            console.log("hover 들어온다.");
            $(this).parent().parent().find(".quickview").toggleClass("hidden");
        }
    );
})