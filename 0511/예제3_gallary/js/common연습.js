$(function(){
  /*script영역 slide gallery 예*/
  let marginLeftPw;
  $("img.next").css("display","none");//css 추가, 초기실행 시 next 버튼 삭제
  console.log($("#navi .page_wrap").css("margin-left"));
  console.log(parseInt($("#navi .page_wrap").css("margin-left")));
  //parseInt() 함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.
});

//thumbnail 이미지로 작동하는 스크립트 구현
$("#nabi a").on("click",function(){
  let imgSrc = $(this).attr("href");
  /*string을 자르는 method를 활용하여 alt의 값을 추가*/
  $("#main img").before("<img src='"+imgSrc+"' alt='thumb'>");

  

});//document ready
