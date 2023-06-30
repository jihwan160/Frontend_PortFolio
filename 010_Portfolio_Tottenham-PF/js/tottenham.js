
var video = $('#mont_video');
var btn = $('#mont_btn');

btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else {
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
})

//  + - 토글
var plusBtn = document.querySelectorAll(".faq_people_list");
console.log(plusBtn)

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", toggleBtn);
}

const CLICKED_CLASS = 'clicked';
const MARK_CLASS = "mark";


function toggleBtn() {
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARK_CLASS);
}

// 탭
var tab_list = $(".about_us_tab_list li");

$(".about_us_tab_txt_cover_2").hide();
$(".about_us_tab_txt_cover_3").hide();
$(".about_us_tab_right_img_2").hide();
$(".about_us_tab_right_img_3").hide();


$(tab_list).eq(0).click(function () {
    $(tab_list).eq(0).addClass('on');
    $(tab_list).eq(1).removeClass('on');
    $(tab_list).eq(2).removeClass('on');
    $(tab_list).eq(3).css({ left: "58px" });
    $(".about_us_tab_txt_cover_1").show();
    $(".about_us_tab_txt_cover_2").hide();
    $(".about_us_tab_txt_cover_3").hide();
    $(".about_us_tab_right_img_1").show();
    $(".about_us_tab_right_img_2").hide();
    $(".about_us_tab_right_img_3").hide();
})
$(tab_list).eq(1).click(function () {
    $(tab_list).eq(0).removeClass("on");
    $(tab_list).eq(1).addClass("on");
    $(tab_list).eq(2).removeClass('on');
    $(tab_list).eq(3).css({ left: "252px" });
    $(".about_us_tab_txt_cover_1").hide();
    $(".about_us_tab_txt_cover_2").show();
    $(".about_us_tab_txt_cover_3").hide();
    $(".about_us_tab_right_img_1").hide();
    $(".about_us_tab_right_img_2").show();
    $(".about_us_tab_right_img_3").hide();
})
$(tab_list).eq(2).click(function () {
    $(tab_list).eq(0).removeClass("on");
    $(tab_list).eq(1).removeClass("on");
    $(tab_list).eq(2).addClass("on");
    $(tab_list).eq(3).css({ left: "465px" });
    $(".about_us_tab_txt_cover_1").hide();
    $(".about_us_tab_txt_cover_2").hide();
    $(".about_us_tab_txt_cover_3").show();
    $(".about_us_tab_right_img_1").hide();
    $(".about_us_tab_right_img_2").hide();
    $(".about_us_tab_right_img_3").show();
})

// 2뎁스
$("header .gnb li").mouseenter(function () {
    $(".sub_menu_area").stop().slideDown(500);
});
$(".sub_menu_area").mouseleave(function () {
    $(".sub_menu_area").stop().slideUp(500);
});


// animate 부드러운 스크롤탑 이동
$('#top_scroll div').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},'1500','swing');
});

// 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩

var sa = 100;

$(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num > sa) {
        $("#top_scroll div").stop().fadeIn();
    }else {
        $("#top_scroll div").stop().fadeOut();
    }
});

    /* a링크 href="#" 준비중 */
    var alertImg =
    "<div class='alert'><img src='./images/alert.png' alt='준비중 알림창'></div>";
    $("body").append(alertImg);

    // 이벤트
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
        $(".alert").stop().fadeIn(700);

        setTimeout(function () {
            $(".alert").stop().fadeOut(700);
        }, 1300);
    });
    
    $('a[href=""]').click(function (event) {
        event.preventDefault();
    });

    var scrl = 50;
    $(window).scroll(function(){
        var event = $(window).scrollTop();
        if(event > scrl) {
            $('.gnb_fix').css({position:"fixed",top:"0",width:"100%",zIndex:"999"});
        }else {
            $('.gnb_fix').css({position:"relative",top:"0",width:"100%"});
        }
    });