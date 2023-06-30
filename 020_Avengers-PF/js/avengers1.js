// 비디오 변수선언
let video = $('#video');
let btn = $('#btn');
// 사운드 변수선언
let sound = $('#sound');
console.log(sound);


// 비디오 재생버튼
btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa-solid fa-circle-pause"></i>');
        sound.css({opacity: 0});
    }else {
        video.get(0).pause();
        btn.html('<i class="fa-solid fa-circle-play"></i>');
        sound.css({opacity: 0.8});
    }
})


// 사운드 무음으로 초기값 설정
video.prop('muted',true);
sound.click(function(){
    if(video.prop('muted')) {
        video.prop('muted',false);
        sound.html('<i class="fa-solid fa-volume-high"></i>');
    }else {
        video.prop('muted',true);
        sound.html('<i class="fa-solid fa-volume-xmark"></i>');
    }
})





// 맨위에 aside 클릭시 사라지기
$('.top_sub i').click(function(){
    $('aside').slideUp('3000');
})

// 새로고침시 화면 맨위로
window.history.scrollRestoration = "manual";

// 스크롤 게이지
// window.onscroll = function () {
//     progressBar()
// };
// function progressBar() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
// }

// a 태그 기본기능 뺴기
$('a[href="#"]').click(function(e){
    e.preventDefault();
})


// 모달창

// 공통부분으로 이미지 가져오기
let img = $('.caxa_sns ul li')
// 공통부분으로 모달 가져오기
let modal = $('.modal');
// 공통부분으로 x닫기표시 가져오기
let close = $('.close');


// 이미지를 눌렀을 떄 이미지의 인덱스 값과 같은 모달을 보여준다
$(img).on("click",function(){
    let imgIndexNum = img.index(this);
    $(modal[imgIndexNum]).css({display:"block"});
})

// 닫기버튼을 눌렀을 때 이미지의 인덱스값과 같은 모달의 닫기버튼을 누르면 모달이 사라진다
$(close).on("click",function(){
    let closeIndexNum = close.index(this);
    $(modal[closeIndexNum]).css({display:"none"});
})


//  명장면 다시보기 클릭시 동영상 바뀜
let bs = $('.bestScene');
let searchVideo = $(bs).parent().next().find('#video');


for (let i = 0; i < bs.length; i++) {
    $(bs).eq(i).click(function(){
    $(searchVideo).attr("src","./images/avengers/avengers"+ (i+1) +"Vid.mp4");
})
}
// 명장면클릭시 배경과 색상바뀜
$('.real_title .real_time ul li').click(function(){
    if($(this).hasClass('active')) {
    }else {
        $('.real_title .real_time ul li').removeClass('active');
        $(this).addClass('active');
    }
})





// gnb 드롭 다운 바
var gnb = $('.gnb li');
var sub = $('.gnb_sub');
sub.hide();
$(gnb).mouseover(function(){
    for(let i = 0; i < gnb.length; i++) {
        $(this).eq(i).children().next().stop().slideDown();
    }
})
$(gnb).mouseout(function(){
    for(let i = 0; i < gnb.length; i++) {
        $(this).eq(i).children().next().stop().slideUp();
    }
})

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
    }, 1000);
});
$('a[href=""]').click(function (event) {
    event.preventDefault();

});

    // animate 부드러운 스크롤탑 이동
    $('.top').click(function(e){
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


    // 스와이퍼

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {     
            delay: 2500, // 시간 설정
          },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable : true,
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      var scrl = 150;
      $(window).scroll(function(){
          var event = $(window).scrollTop();
          if(event > scrl) {
              $('.gnb_all').css({position:"fixed",top:"0",width:"100%",zIndex:"999",borderBottom:"1px solid #000",background:"#fff"});
          }else {
              $('.gnb_all').css({position:"static",top:"0",width:"100%",background:"none"});
          }
      });
