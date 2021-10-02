$(function(){
  /*script영역 one 사용 예*/
  // $("a").click(function(){
  //   console.log($(this).attr("href"))
  //   let aHref = $(this).attr("href")
  //   $("a").removeClass("on");
  //   $(this).addClass("on");
  //   /*이미지 교체 코드*/
  //   $(".img_box img").attr("src",aHref);
  //   return false;
  // });

  /*요소의 event내의 로직을 한번만 실행할 경우*/
  $("a").one("click",function(){
    //실행문
     let aHref = $(this).attr("href")
     $("a").removeClass("on");
     $(this).addClass("on");
     /*이미지 교체 코드*/
     $(".img_box img").attr("src",aHref);
     return false;
  });

  $("a").click(function(){
    console.log("click!!")
    return false;
  });
});//document ready
