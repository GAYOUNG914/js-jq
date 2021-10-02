$(function(){
  console.log('this is jquery');
  // for(var i = 1; i < 5; i++){
  //   if( i == 1 ){
  //     $("li:nth-child("+i+")").css("color","red");//i변수와 선택자명의 조합
  //   }else if( i == 2 ){
  //       $("li:nth-child("+i+")").css("color","blue");
  //   }else if( i == 3 ){
  //       $("li:nth-child("+i+")").css("color","green");
  //   }else if( i == 4 ){
  //     $("li:nth-child("+i+")").css("color","yellow")
  //   }
  // }//아래와 같은 결과와 동일한 결괏값을 얻을 수 있다.
  // let liNum = document.getElementsByTagName('li');
  // liNum[0].style.color = 'red';
  // console.log(liNum)

  // $("li:nth-child(1)").css("color","red");
  // $("li:nth-child(2)").css("color","blue");
  // $("li:nth-child(3)").css("color","green");
  // $("li:nth-child(4)").css("color","yellow");

  // $("li p:only-child").css("color","red");
  // $("li span:only-child").css("color","red");

  // $("li p:only-child, li span:only-child").css("color","blue");

  /*속성 선택자*/
  // $("[class = 'items'] a").css("color","red");// 해당 속성을 갖고 있는 모든 요소 선택
  // $("ul li[title != 'first'] a").css("color","blue");// 선택한 특정태그를 제외한 나머지 태그를 선택
  $("[title ^= 's'] a").css("color","red");//특정 속성이 지정한 값으로 시작하는 요소 선택
  $("a[href $= 'com']").css("color","blue");//특정 속성이 지정한 값으로 시작하는 요소 선택
  $("a[href $= 'net']").css("color","yellow");//특정 속성이 지정한 값으로 시작하는 요소 선택
  $("[title *= 'th'] a").css("color","red");
  $("[class = 'box'][title = 'third'] a").css("color","green");

});
