$(function(){
  /*script 영역 select all 사용 예*/

  // click event 1번
  // $("button").click(function(){
  //   // 선택1
  //   // $("input[type='checkbox']").attr("checked","checked");
  //   // 선택2
  //   $(":checkbox").attr("checked","checked");
  // });

  // on을 활용하여 click event
  // $(":checkbox").attr("checked","checked");

  $("body").on("click","button",function(){
    //$("checkbox").attr("checked",true);//초기 document 로드 완료 후 attribute에 값을 변경할 수 있다. 로드 이후 변경된 값은 적용되지 않느다.
    $(":checkbox").prop("checked",true);//document 로드 이후 변경된 속성에 적용할 수 있다.
  });

});//document ready
