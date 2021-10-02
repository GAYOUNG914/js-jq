$(function(){
  // script 영역 prev toggle 사용 예
  // console.log($("#gnb").prev());//선택요소의 바로 앞 요소 선택
  // console.log($("#gnb").next());//선택요소의 바로 뒤 요소 선택
  $("button").click(function(){
    //click 이벤트 후 실행문
    // $("#header").toggle();
    // 1.설렉터로 직접 선택 후 container 토글방식으로 노출
    // $("#container").toggle();
    // 2.간접선택 prev,next 직접 선택 후 container 토글방식으로 노출
    console.log($(this))
    // $(this).next().toggle();
    $(".display_toggle").toggle();
  });
 });
