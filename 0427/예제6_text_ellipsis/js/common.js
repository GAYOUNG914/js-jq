$(function(){
  //script영역 text ellipsis 구현허가 예
  const showText = 100;
  let elem = $(".more_text");
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";

  /*처음 화면에서 해당 컨텐츠의 텍스트가 100자이상 혹은 이하인지 확인*/
  let content = elem.html();
  let contentLeng = content.length;
  let lessText = content.substr(0,showText);
  let moreText = content.substr(showText,contentLeng);
  let changeHtml = '';

  if( showText < contentLeng ){
    changeHtml = lessText + "<span>...</span><span class='more_content'><span>"+moreText+"</span><a href='#'class='more_btn less'><span>Show More</span></a></span>"
    elem.html(changeHtml);
  }

  $(".more_btn").click(function(){
    //click시 실행문
    //console.log("click event 실행완료");
    // console.log($(this))
    if($(this).hasClass("less")){
      // console.log('less class 가지고 있습니다.');
      $(this).removeClass("less");
      $(this).html("<span>"+lessBtnText+"</span>");
    }else{
      $(this).addClass("less");
      $(this).html("<span>"+moreBtnText+"</span>")
    }

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    console.log($(this).parent().prev())//부모 지목
    // console.log($(this).prev())

  });
});
