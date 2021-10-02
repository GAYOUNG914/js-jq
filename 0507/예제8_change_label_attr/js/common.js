$(function(){
  /*script 영역 change label attribute 사용 예*/
  $("label,:checkbox").click(function(){//element 다중선택 ','구분한다.
    $("label").css("background","none");
    $(":checked").each(function(){
      console.log($(this))
      let thisId = $(this).attr("id");
      $("label[for='"+thisId+"']").css("background","#ccc");
      // $(this).next().css("background","#ccc");
    });
  });
});//document ready
