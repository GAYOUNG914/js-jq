$(function(){
//script 영역 css() 사용 예

// 방법1
// $(".box").css("width","300px");
// $(".box").css("height","300px");
// $(".box").css("border","5px solid yellow");

//방법2
// $(".box").css("width","300px").css("height","300px").css("border","5px solid yellow")

//방법3
// $(".box").css({"width":"300px","height":"300px","border":"5px solid yellow"});

//class type 별로 3가지 방법으로 css 적용해보기
//방법 1
// $(".box_type_a").css("color","#fff");
// $(".box_type_a").css("background","green");
// $(".box_type_a").css("width","300px");
// $(".box_type_a").css("height","300px");

//방법2
// $(".box_type_a").css("color","#fff").css("background","green").css("width","300px").css("height","300px")

//방법3
$(".box_type_a").css({"color":"#fff","background":"green","width":"300px","height":"300px"})


 });
