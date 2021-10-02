$(function(){
  // console.log('this is jquery only selector');
  //first,first-child/last,last-child 비교 예제
  // $("p:first-child").css("color","red");
  // $("p:first").css("color","blue");
  // $("p:last-child").css("color","pink");
  // $("p:last").css("color","yellow");

  /*event, odd 예제*/
  // element의 인덱스 값으로 선택한다
  // $("li:even").css("background","red");// element의 인덱스의 짝수 선택
  // $("li:odd").css("background","blue");// element의 인덱스의 홀수 선택
  // console.log($("li:even"))

  /*eq,gt,lt 예제*/
  // $("li:eq(2)").css("color","red");//해당 인덱스와 같은 위치의 요소를 선택 ( index는 0부터 시작 )
  // $("li:gt(2)").css("background","blue");// great than eq기준으로 index가 큰 요소들을 선택
  // $("li:lt(2)").css("background","red");// less than eq기준으로 index가 작은 요소들을 선택

  /*heading 태그 예제*/
  // $(":header").css("color","red");// h1~ h6까지 heading tag 선택
  //
  // // contains 문자열의 포함 유무로 요소 선택
  // $("p:contains('사과')").css("background","red");
  // $("p:contains('배')").css("background","brown");
  // $("p:contains('귤')").css("background","yellow");
  //
  // $("a:contains('menu2')").css("color","white");
  // $("a:contains('menu2')").css("background","red");

  /*has 예제*/
  $("li:has(strong)").css("color","red");
  $("li:has(p)").css("backround","yellow");
  $("li:has(span)").css("background","red");
  // $("li:has(a) a").css("color","red");
  $("li > a").css("color","red");

  $("li:parent").css("border","")

});
