$(function(){
  /*script 영역 table scroll 사용 예*/
  $(window).on("load resize",function(){
    let tblcWidth = $(".tbl_content").innerWidth();
    let tabtWidth = $(".tbl_content table").outerWidth();
    // console.log($(".tbl_content").innerWidth())
    // console.log($(".tbl_content table").outerWidth())
    // console.log(tblcWidth+','+tabtWidth)
    let scrollBarWidth = tblcWidth - tabtWidth;
    console.log(scrollBarWidth)
    $(".tbl_header").css("padding-right",scrollBarWidth);
  }).resize();
});//document ready
