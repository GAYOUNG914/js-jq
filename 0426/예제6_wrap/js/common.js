$(function(){
//script영역 wrap(),wrapAll사용의 예
// wrap() 특정 태그 지정한 태그로 감싸는 메서드
$("strong").wrap("<h2></h2>");
$(".menu ul li span").wrap("<a href='http://naver.com' target='_self'></a>")

// $("p").wrap("<div class='item_wrap'></div>");

// wrapAll()
$("p.items").wrapAll("<div class='item_wrap'></div>");
// $(".item_wrap").prependTo("#content");
$(".item_wrap").insertBefore('.menu');
 });
