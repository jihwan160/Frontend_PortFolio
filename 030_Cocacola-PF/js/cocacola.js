$(".menu_toggle_btn").click(function () {
  $(".gnb").stop().toggle();
});

$(function () {
  $(".slide_gallery").bxSlider({
    auto: true,
    // pager와 같이 못씀
    // pagerCustom : '.slide_pager',
    slideWidth: 3000,
    controls:false, // 슬라이드버튼 숨기기
  });
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
        }, 1000);
    });
    
    $(".gnb li").click(function(){
    if($(window).width() < 768) {

      }
    })

// gnb fixed
    var scrl = 150;
      $(window).scroll(function(){
          var event = $(window).scrollTop();
          if(event > scrl) {
              $('.header').css({position:"fixed",top:"0",width:"100%",zIndex:"99999",background:"white",boxShadow:"5px 3px 5px rgba(39,39,39,.2)"});
              // borderBottom:"1px solid #d9d9d9"
          }else {
              $('.header').css({position:"relative",top:"0",width:"100%",background:"none",borderBottom:"none",boxShadow:"none"});
          }
      });




    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay : {
        delay:2500,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });