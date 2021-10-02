$(function(){
  /*script 영역 load 사용 예*/
  $('button#first').click(function(){
    $("p").load("./sample.txt");
    $("div").load("./sample2.txt");
  });
});//document ready
