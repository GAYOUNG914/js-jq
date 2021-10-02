$(function(){
  // script 영역 prepend(), append() 사용 예
  let pLeng = $("p").length;
  console.log(pLeng)
  // prepend() 사용 예
  for(var i = 0; i < pLeng; i++){
    if( i == (pLeng-1)){
      $("p:nth-child("+(i+1)+")").prepend("<strong>script language : </strong>");
    }else{
      $("p:nth-child("+(i+1)+")").prepend("<strong>mark up language : </strong>");
    }
  }
  // append() 사용 예
  /*<br><strong>add text</strong> 태그 추가하기*/
  let indexNum = 0;
  for(var i = 0; i< pLeng; i++){
    indexNum = i + 1;
    $("p:nth-child("+indexNum+")").append("<br><strong>add text</strong>");
  }
 });
