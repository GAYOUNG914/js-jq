$(function(){
  /*script 영역 label change 사용 예*/
  // input 선택 방식 1
  // console.log($("input[type=radio]"))
  // input 선택 방식 2
  // console.log($(":radio"))

  $(":radio").change(function(){
      console.log($(this).attr("id"))
      let genderNum = $(this).attr("id");
      $("label").css("font-weight","normal").css("color","#000");;
      $("label[for='"+genderNum+"']").css({"font-weight":"bold","color":"red"});
  });
});//document ready
