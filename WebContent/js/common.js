$(document).ready(function() {
    //login + search div 일단 안보이게
    $("#login").hide();
    $("#search_div").hide();

    var height=$('#header').height()+$('#container').height()+$('#footer').height();
    $(".backlayer").css('height',height+'px');

    /* 팝업 일단 안뜨게 해놓음 > 나중에 이거 없애고 #popup_close.click 주석처리를 풀어야함
    $(".emphasized").hide();
    $(".backlayer").hide();*/

    $("#popup_close").click(function() {
        $(".emphasized").hide();
        $(".backlayer").hide();
    });


    // bean_button이 눌리면 bean_close로 src 바뀌면서 login section div 오픈
    $("#bean_button").click(function() {
        if ($("#bean_img").attr("src") == "img/bean.png" || $("#bean_img").attr("src") == "img/bean.PNG") {
            $("#bean_img").attr("src", "img/bean_close.PNG");
        } else {
            $("#bean_img").attr("src", "img/bean.png");
        }
        $("#login").slideToggle(200);

    });

    // search 버튼이 눌리면 search_close로 src 바뀌면서 search section div 오픈
    $("#search").click(function() {
        if ($("#search_img").attr("src") == "img/search.PNG" || $("#search_img").attr("src") == "img/search.png") {
            $("#search_img").attr("src", "img/search_close.PNG");
        } else {
            $("#search_img").attr("src", "img/search.PNG");
        }
        $("#search_div").slideToggle(200);
    });

    // search section div에서 form > submit 버튼 눌렸을 때 search_key 입력되었는지 확인
    $("#search_form").submit(function(e) {
        // 기본동작 수행 방식
        e.preventDefault();

        /** 검색어가 입력되었는지 검사 */
        var target = $("#search_key"); // 대상요소를 가져온다.
        console.log(target.val());
        if (!target.val()) { // 값이 없다면?
            alert("검색어를 입력하세요."); // 메시지 표시
            target.focus(); // 대상요소에게 포커스 강제 지정
            return false; // 실패했음을 리턴
        }
        return true; // 성공했음을 리턴
    });

    // md's pick 슬라이드 쇼에서 이미지에 마우스 오버 시 quickview 클래스 보이게!
    $(".mdsimg").hover(
        function() {
            $(this).parent().parent().find(".quickview").toggleClass("hidden");
        }
    );
})