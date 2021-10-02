$(function(){
  /*script 영역 check value 사용 예*/
  $("button").click(function(){
    // console.log("button click")
    // console.log($("input[name='mail']").val())
    // console.log($("input[name='check']").val())

    if( $("input[name='mail']").val() != $("input[name='check']").val() ){
      // 입력값이 다를때 실행
      $("em").text("메일 주소가 동일하지 않습니다.")
    }else{
      // 입력값이 같을때 실행
      $("em").text("메일 주소가 동일합니다.")
    }

    return false;
  });

});//document ready
