$(function(){
  /*script 영역 event handler 사용 예*/

  //event 개별 사용
  // $(":submit").mouseover(function(){
  //   $(this).after("<p>🤣🤣🤣🤣🤣🤣🤣🤣🤣</p>");
  // });
  // $(":submit").mouseout(function(){
  //   $(this).next().remove();
  // });

  /*event method chain 사용*/

$(":submit").mouseover(function(){
  $(this).after("<p>🤣🤣🤣🤣🤣🤣🤣🤣🤣</p>");
}).mouseout(function(){
  $(this).next().remove();
});

});//document ready
