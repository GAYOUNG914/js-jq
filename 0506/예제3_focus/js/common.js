$(function(){
  /*script 영역 focus() 사용 예*/
  $("input").val("입력해주세요.").css("color","#ccc").one("focus",function(){
    console.log("focus in");
    // console.log($(this))
    $(this).val("").css({"color":"#000","width":"250px"});
  }).blur(function(){//focus out 일때
    // console.log("focus out")
    if( $(this).val() == "" ){
      // console.log("입력값이 없습니다.")
      $(this).val("입력해주세요.").css({"color":"#ccc","width":"200px"}).one("focus",function(){
        $(this).val("").css({"color":"#000","width":"250px"});
      });
    }
  });
});//document ready
