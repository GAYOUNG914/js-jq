$(function(){
//script영역 insertBefore(), insertAfter사용의 예
// $("#wrap").insertBefore("strong");
// $(".items:nth-child(3)").css("color","red");
// $(".items:nth-child(5)").css("color","blue");
//

$(".items:nth-child(5)").insertBefore(".items:nth-child(3)");/// items5를 추가하면  index  값이 변경 되어서 nth-child 값도 변경이 된다.
$(".items:nth-child(3)").css("color","red");

$("strong").insertAfter(".items:nth-child(4)");// itmes3 테그슽가 존재하는 요소
console.log($(".items:last-child").text());
 });
