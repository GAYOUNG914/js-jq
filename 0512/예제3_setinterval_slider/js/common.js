$(function(){
  /*script 영역 slider 예*/
  const widthNum = 150;// slide li 각각의 너비, carousel_inner의 너비를 계산 할 수 있다.
  let caInMarginLeft = $("#carousel_inner").css("margin-left");
  // ul(슬라이드)의 개수 가져오기
  let ulLeng = $("#carousel_inner ul.column li").length;

  //슬라이드 총 너비를 계산
  $("#carousel_inner ul.column").css("width", widthNum*ulLeng );

  //슬라이드 포지션 초기화
  $("#carousel_inner ul.column li:last").prependTo("#carousel_inner ul.column");
  $("#carousel_inner").css("margin-left","-"+widthNum+"px");
  // $("#carousel_inner").css("margin-left",-(widthNum));

  // prev button script
  $("#carousel_prev").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    console.log(caInMarginLeft);
    // $("#carousel_prev,#carousel_next").hide();
    if(!$("#carousel_inner").is(":animated")){// slide animation이 실행되지않을때 아래 코드를 실행
      $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) + widthNum },1000,"easeOutBounce",function(){
        // animation 실행이 끝난 후 실행 영역
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column li:last").prependTo("#carousel_inner ul.column");
        // $("#carousel_prev,#carousel_next").show();
      });
    }
  });

  // next button script
  $("#carousel_next").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    // $("#carousel_prev,#carousel_next").hide();
    if(!$("#carousel_inner").is(":animated")){// slide animation이 실행되지않을때 아래 코드를 실행
      $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) - widthNum },1000,"easeOutBounce",function(){
        // animation 실행이 끝난 후 실행 영역
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column li:first").appendTo("#carousel_inner ul.column");
        // $("#carousel_prev,#carousel_next").show();
      });
    }
  });

  // auto slide
  let timerId = setInterval(function(){
    $("#carousel_next").click();
  },2000);

  // clearInterval
  $("#carousel_wrap").mouseenter(function(){
    //auto slide stop
    clearInterval(timerId);
  }).mouseleave(function(){
    //auto slide start
    timerId = setInterval(function(){
      $("#carousel_next").click();
    },2000);
  });



});//document ready
