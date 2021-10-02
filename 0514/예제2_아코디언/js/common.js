$(function(){
  /*script영역 jquert 아코디언 예*/
  $("dd:not(:first)").css("display","none");//첫번쨰 dd가 아닐경우 display 안보이게
  $("dl dt").on("click",function(){
    // if($(this).next().css("display") == "none" ){
    //   $("dl dd").css("display","none");
    //   $(this).next().css("display","block")
    // }else{
    //   $(this).next().css("display","none");
    // }
    if($("+dd",this).css("display") == "none"){//this(dt)의 바로뒤에오는 dd요소의 display가 안보인다면(css에서 +는 형제요소를 뜻함),
      $("dl dd").slideUp("slow");//slideUp()함수는 높이를 없애주는 것이다/ $("dl dd").css("display","none");와 같은 말
      $("+dd",this).slideDown("slow");//slidedown()함수는 높이를 다시 생기게 하는 것이다.
      //$(this).next().css("display","block")
      // }else{
      //   $(this).next().css("display","none");
      // } 와 같음
      $("span",this).text("▾");
    }
  });
});
