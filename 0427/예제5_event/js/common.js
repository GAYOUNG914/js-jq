$(function(){
  // script 영역 event 사용 예
  // $("button").click(function(){
    //click event가 발생하면 실행되는 영역
    // console.log("click event가 실행 되었습니다.")
    console.log($(this));// click 이벤트를 실행한 요소 자신을 선택
    // let attrNum = $(this).attr("class")
    // console.log(attrNum);
  //   console.log($("img").attr("title"))
  //   if($("img").attr("title") == "mountain01"){
  //     $("img").attr("src","./img/mountain_02.png").attr("title","mountain02");
  //   }else{
  //     $("img").attr("src","./img/mountain_01.png").attr("title","mountain01");
  //   }
  // });

  $("a").click(function(){
      if($("img").attr("title") == "mountain01"){
        $("img").attr("src","./img/mountain_02.png").attr("title","mountain02");
      }else{
        $("img").attr("src","./img/mountain_01.png").attr("title","mountain01");
      }
      // e.preventDefault();
      return false;
  });
 });
