$(function(){
  //script 영역 prepend(), append() 사용 예
  $("strong").appendTo("p");
  //$("strong").prependTo("p");
  $(".items:last-child").prependTo(".items:first-child");
  // $(".items:first-child").appendTo("#wrap");

 });
