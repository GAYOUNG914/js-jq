$(function(){
  // script 영역 before(), after() 사용 예
  //befroe() 사용 예
  // $("p#first").before("<h2>html</h2>");
  // $("p#second").before("<h2>css3</h2>")
  // $("p#third").before("<h2>javascript</h2>")
  //
  /*제이쿼리의 'chain' method*/
  // $("p#first").before("<h2>html</h2>").after("<h2>css3</h2>");
  // $("p#third").before("<h2>javas</h2>");

  $("p#first").before("<h2>html</h2>").after("<h2>css3</h2>");
  $("p#third").before("<h2>javas</h2>").after("<h2>asdf</h2>");
  $("p#fifth").before("<h2>javas</h2>").after("<h2>asdf</h2>");
 });
