
// $(document).ready(function(){
//   // 브라우저 너비 높이값 변수 할당
//   var browserWidth = $(window).width();
//   var browserHeight = $(window).height();
//   console.log('브라우저 너비값 : ' + browserWidth);
//   console.log('브라우저 높이값 : ' + browserHeight);

//   // DOM객체에 동적 높이값 적용
//   $('#wrap').css({height:browserHeight});
// })


// 스와이퍼
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  effect: "coverflow",
  // spaceBetween: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
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
        }, 1000);
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



