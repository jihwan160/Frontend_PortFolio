


$(".news_list li").slice(0,6).show();


$(".more_btn").click(function(e){
    e.preventDefault();
    $(".news_list li:hidden").slice(0,2).show();
    if($(".news_list li:hidden").length == 0) {
        $(".more_btn").hide();
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