$(function(){
  // script 영역 event 사용 예
  // $("img").mouseover()
  // $("img").mouseout()

  // mouseover/mouseout and mouseenter/mouseleave 차이점 구별
  // 아래 주소에서 참고
  // https://api.jquery.com/mouseenter/

  // $("img").mouseover(function(){
  //   // 실행문
  //   // $(this).attr("src","./img/mountain_01.png").attr("alt","산이미지1").attr("title","mountain01");
  //   $(this).attr({
  //     src:"./img/mountain_01.png",
  //     alt:"산이미지1",
  //     title:"mountain01",
  //   });
  // }).mouseout(function(){
  //   // 실행문
  //   // $(this).attr("src","./img/mountain_02.png").attr("alt","산이미지2").attr("title","mountain02");
  //   $(this).attr({
  //     src:"./img/mountain_02.png",
  //     alt:"산이미지2",
  //     title:"mountain02",
  //   });
  // });


  // $("img").mouseenter(function(){
  //   // 실행문
  //   // $(this).attr("src","./img/mountain_01.png").attr("alt","산이미지1").attr("title","mountain01");
  //   $(this).attr({
  //     src:"./img/mountain_01.png",
  //     alt:"산이미지1",
  //     title:"mountain01",
  //   });
  // }).mouseleave(function(){
  //   // 실행문
  //   // $(this).attr("src","./img/mountain_02.png").attr("alt","산이미지2").attr("title","mountain02");
  //   $(this).attr({
  //     src:"./img/mountain_02.png",
  //     alt:"산이미지2",
  //     title:"mountain02",
  //   });
  // });


  // onmousemove
  $("img").mousemove(function(e){
    console.log(e.clientX)
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    $("span").html("현재x좌표 : "+mouseX+" 현재y좌표 : "+mouseY);
    $("span").css({left: mouseX, top: mouseY})
  });




});
