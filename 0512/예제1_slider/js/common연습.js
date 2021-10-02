$(function(){
  /*script 영역 slider 예*/
  const widthNum = 620;// slide 각각의 너, carousel_inner의 너비를 계산 할 수 있다.
  let caInMarginLeft = $("#carousel_inner").css("margin-left")
  // ul(슬라이드)의 개수 가져오기
  let ulLeng = $("#carousel_inner ul.column").length;

  //슬라이드 총 너비를 계산
  $("#carousel_inner").css("width", widthNum*ulLeng );

  //슬라이드 포지션 초기화
  $("#carousel_inner ul.column:last").prependTo("#carousel_inner");
  $("#carousel_inner").css("margin-left","-"+widthNum+"px");
  // $("#carousel_inner").css("margin-left",-(widthNum));

  // prev button script
  $("#carousel_prev").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    console.log(caInMarginLeft);
    $("#carousel_prev,#carousel_next").hide();
    $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) + widthNum },500,"swing",function(){
      // animation 실행이 끝난 후 실행 영역
      $("#carousel_inner").css("margin-left","-"+widthNum+"px");
      $("#carousel_inner ul.column:last").prependTo("#carousel_inner");
      $("#carousel_prev,#carousel_next").show();
    });
  });

  // next button script
  $("#carousel_next").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    $("#carousel_prev,#carousel_next").hide();
    $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) - widthNum },500,"swing",function(){
      // animation 실행이 끝난 후 실행 영역
      $("#carousel_inner").css("margin-left","-"+widthNum+"px");
      $("#carousel_inner ul.column:first").appendTo("#carousel_inner");
      $("#carousel_prev,#carousel_next").show();
    });
    // if(!$("#carousel_inner").is(":animated")){// slide animation이 실행되지않을때 아래 코드를 실행
    //
    // }
  });

  // auto slide
  let timerId = setInterval(function(){
    $("#carousel_next").click();
  },5000);

  // $("body").click(function(){
  //   clearInterval(timerId);
  // });

});//document ready
