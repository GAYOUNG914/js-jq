$(function(){
  // script 영역 replaceWith() 사용 예
  // $(".items:nth-of-type(2)").replaceWith("<a href='http://naver.com'>Naver</a>");
  $(".items").replaceWith("<a href='http://naver.com'>Naver</a>");
  // $("span").wrapAll("<div class='span_wrap'></div>")
  // $(".span_wrap").replaceWith("<div class='replace_span'>span 바꾸기</div>");
  $("p").replaceWith("<span class='box'>text box</span>");
  $(".box").remove();
  $("a").remove();
  $("span").remove();
  $(".wrap_inner").html(boxHtml+'<span>안녕하세요</span>');
  $(".wrap_inner").wrapInner("<div class='box'></div>");
 });
