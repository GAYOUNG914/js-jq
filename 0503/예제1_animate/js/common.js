$(function(){
  /*script 영역 animate 사용 예*/

  $("button").click(function(){
    // 수치 증가 복합대입연산 사용 방법
    // $(".box").animate({left:'+=10px',top:'+=10px'});

    // css style 다중적용
    //$(".box").animate({left:'250px',opacity:'0.5',height:'150px',width:'150px'});

    // toggle 사용 방법
    // $(".box").animate({height:'toggle',width:'toggle'});
    // $(".box").animate({left:'toggle',top:'toggle'});

    // animation 다중 사용 방법
    // let elem = $(".box");
    // elem.animate({height: '300px', opacity: '0.4'},'slow');
    // elem.animate({height: '300px', opacity: '0.8'},'slow');
    // elem.animate({height: '100px', opacity: '0.4'},'slow');
    // elem.animate({height: '100px', opacity: '0.8'},'slow');

    /*animate 재귀함수 사용*/
    function aniBox(){
      $(".box").animate({left: '+=10px', top: '+=10px'},1000,"easeOutBounce",aniBox);
    }
    aniBox();

  });

});//document ready
