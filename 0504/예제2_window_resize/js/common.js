$(function(){
  /*script 영역 window resize 사용 예*/
  $(".box").each(function(i){
    let trans = "+";// box의 크기를 증감시키는 변수
    let leftDir = "+"//box를 x축 이동 증감시키는 변수
    let topDir = "+"//box를 y축 이동 증감시키는 변수
    let thisElem = $(this);
    $(window).resize(function(){
      //윈도우창의 크기가 변화되면 아래 코드가 실행된다.
      let thisOffset = thisElem.offset();
      // console.log(thisElem.offset().left)

      //size 증감 조건식
      console.log(thisElem.width())
      if( thisElem.width() > 200 ){
        trans = "-";
      }else if( thisElem.width() < 50 ){
        trans = "+";
      }

      // 이동조건식 : left
      if( thisOffset.left > $(window).width() - thisElem.width() ){
        leftDir = "-";
        thisElem.css("left", $(window).width() - thisElem.width() );
      }else if( thisOffset.left < 0 ){
        leftDir = "+";
      }
      // 이동조건식 : top
      if( thisOffset.top > $(window).height() - thisElem.height() ){
        topDir = "-";
        thisElem.css("top", $(window).height() - thisElem.height() );
      }else if( thisOffset.top < 0 ){
        topDir = "+";
      }

      thisElem.css({"width": trans+"=1px","height": trans+"=1px"});
      thisElem.css({"left": leftDir+"=1px","top": topDir+"=1px"})//left,top 복합대인연산을 추가
      // console.log("box"+(i+1)+"의 top:"+thisOffset.top+",box"+(i+1)+"의 left:"+thisOffset.left)
    });
  })
});//document ready
