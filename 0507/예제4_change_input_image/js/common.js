$(function(){
  /*script 영역 event handler 사용 예*/

  /*event method chain 사용*/
  //때에에에에엥ㅇ틀림
$(":image").mouseover(function(){
  $(this).change("<img src='./img/button_on.jpg'>");
}).mouseout(function(){
  $(this).next().remove();
});


//아래는 정답

$(function(){
  /*script 영역 change input image 사용 예*/
  // mouseover 일때 image button_on.jpg 노출
  // mouseout 일때 image button.jpg 노출
  $(":image").mouseover(function(){
    //실행문
    $(this).attr("src","./img/button_on.jpg");
  }).mouseout(function(){
    //실행문
    $(this).attr("src","./img/button.jpg");
  });
});//document ready


});//document ready
