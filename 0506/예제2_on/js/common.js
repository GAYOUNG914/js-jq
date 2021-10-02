$(function(){
  /*script 영역 on 사용 예*/
  // $("a").click(function(){
  //   let aHref = $(this).attr("href");
  //   $("a").removeClass("on");
  //   $(this).addClass("on");
  //   $(".img_box img").attr("src",aHref);
  //   return false;
  // });

  $("ul").on("click","a",function(){//document Load 완료 이후 추가되는 element도 해당실행문에서 실행 가능
    let aHref = $(this).attr("href");
    $("a").removeClass("on");
    $(this).addClass("on");
    $(".img_box img").attr("src",aHref);
    return false;
  });

  $("button").click(function(){
    $("ul").prepend("<li><a href='./img/img04.jpg'>바다</li>");
  });
});//document ready
