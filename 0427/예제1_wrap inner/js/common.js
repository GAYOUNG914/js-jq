$(function(){
//script 영역 wrapInner() 사용 예
//wrapInner method 사용 시 선택한 요소의 자식 요소 모두를 특정 태그로 감싼다
$(".wrap_inner").wrapInner("<div class='inner'></div>");
$(".items").wrapInner("<a href='http://daum.net'></a>")
$(".inner").prependTo("#content");
 });
