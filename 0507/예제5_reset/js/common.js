$(function(){
  /*script 영역 input reset 사용 예*/
  // 입력 내용을 초기화 합니다.

  // one method를 사용한 방법

  // $(":reset").one("click",function(){
  //   console.log("click");
  //   $(this).after("<p>입력 내용을 초기화 합니다.</p>");
  // });

  //로직 구현 방식
  $(":reset").click(function(){
    $(this).next().remove();
    $(this).after("<p>입력 내용을 초기화 합니다.</p>");
  });
});//document ready
