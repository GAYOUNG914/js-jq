$(function(){
  /*script 영역 load html사용 예*/
  // $("button").click(function(){
  //   let thisAttr = $(this).attr("class");
  //   console.log(thisAttr)
  //   if( thisAttr == "p_tag"){
  //     $(this).next().load("./load_file.html p");
  //   }else if( thisAttr == "img_tag" ){
  //     $(this).next().load("./load_file.html img");
  //   }else if( thisAttr == "a_tag" ){
  //     $(this).next().load("./load_file.html a");
  //   }
  // });
  $("a").click(function(){
    console.log($(this).attr("href"))
    return false;
  });
});//document ready
