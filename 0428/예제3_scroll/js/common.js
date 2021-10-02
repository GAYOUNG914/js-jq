$(function(){
  //script 영역 scroll()사용 예
  // console.log($(window).height());
  $(window).scroll(function(){
    // console.log($(this).scrollTop())
    // console.log('scrollTop :'+$(this).scrollTop()+',window height:'+winHeight)
    let winHeight = $(window).height() - 70;
    let scTop = $(this).scrollTop();
    let navBar = $("nav");

    if( scTop > winHeight ){
      navBar.addCalss("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });
});
