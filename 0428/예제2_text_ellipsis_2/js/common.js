$(function(){
  // script 영역 text ellipsis 다중요소 사용 예
  const showText = 200;
  let elem = $(".more_text");
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";

  // elem = document.body.getElementsByClassName('more_text');
  // console.log(elem)
  // for( var i = 0; i < elem.length; i++){
  //   var content = elem[i]
  // console.log(content)
  // }//each method와 같은 구문

  elem.each(function(i){
    console.log(i)
    //console.log($(this).text())
    //실행문
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0,showText);
    let moreText = content.substr(showText,contentLeng);
    let changeHtml = '';
    if( showText < contentLeng ){
      changeHtml = lessText + "<span>...</span><span class='more_content'><span>"+moreText+"</span><a href='#'class='more_btn less'><span>Show More</span></a></span>";
      $(this).html(changeHtml);
    }
  });



  // /*처음 화면에서 해당 컨텐츠의 텍스트가 100자이상 혹은 이하 인지 확인*/
  // let content = elem.html();// 기존텍스트 가져오기
  // let contentLeng = content.length;//문자 텍스트의 총개수를 가져온다.
  // let lessText = content.substr(0,showText);// 보여지는 텍스트
  // let moreText = content.substr(showText,contentLeng);// 잘린 텍스트
  // let changeHtml = '';// 보여지는 텍스트와 잘린 텍스트를 담을 변수
  //
  // if( showText < contentLeng ){
  //   changeHtml = lessText + "<span>...</span><span class='more_content'><span>"+moreText+"</span><a href='#'class='more_btn less'><span>Show More</span></a></span>";
  //   elem.html(changeHtml);
  // }
  //
  $(".more_btn").click(function(){
    //click 시 실행문
    // console.log("click event 실행완료");
    // console.log($(this))
    if( $(this).hasClass("less") ){
      // console.log('less class 가지고 있습니다.');
      $(this).removeClass("less");
      $(this).html("<span>"+lessBtnText+"</span>");
    }else{
      $(this).addClass("less");
      $(this).html("<span>"+moreBtnText+"</span>");
    }

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    console.log($(this).parent().prev())
    //$(".more_content") == $(this).parent()
    // console.log($(this).prev())
  });
 });
