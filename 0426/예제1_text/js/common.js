$(function(){
  // console.log("hi!! jquery");
  // script 영역 text() 사용 예
  // $("p:nth-child(1)")
  // $("p:first-child")
  // $("p:first")
  // $("#first")
  // $("p#first")
  $("p#first").text("hi!! Jquery");
  let numText = $("p#first").text();
  // console.log(numText);

  // 특정 요소의 텍스트를 다른 요소에 삽입하는 예
  // 방법1:
  // $("p#first").text($("p#second").text())
  // console.log($("p#first").text())

  // 방법2:
  // a:
  // let elem = $("p#first");
  // let elemInputText = $("p#second").text();
  // // console.log(elemInputText)
  // // console.log(typeof(elemInputText))
  // elem.text(elemInputText);
  // console.log(elem.text());

  //b:
  // let elemBtype = $("p#first");
  // let elemInput = $("p#second");
  // console.log("second p tag의 텍스트 가져오기: "+elemInput.text())
  // elemBtype.text(elemInput.text());
  // console.log("first p tag의 변경된 텍스트 출력: "+elemBtype.text());

  let numHtml = '';
  // console.log(typeof($("p#second").html()))
  numHtml = $("p#second").html();
  // console.log(numHtml)
  // console.log(typeof(numHtml))
  // $("p#first").text(numHtml);
  $("p#first").html(numHtml);
  numHtml = $("#third h2").html();
  $("p#first").html(numHtml);
 });
