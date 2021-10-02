$(function(){
  /*script 영역 table grid 예*/
  let thisNum;
  // $("td").mouseover(function(){
  //   console.log($(this).index())
  //   thisNum = $(this).index() +1;
  //   $("td:nth-child("+thisNum+")").addClass("hover");
  // }).mouseout(function(){
  //   $("td:nth-child("+thisNum+")").removeClass("hover");
  // });

  $("td").mouseover(function(){
    console.log($(this).index())
    thisNum = $(this).index() + 1;
    $("td").removeClass("hover");
    $("td:nth-child("+thisNum+")").addClass("hover");
  });
});//document ready
