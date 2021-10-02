$(function(){
  /*script 영역 ajax사용 예*/
  $.ajax({
    url:'data.xml',
    datatype:'xml',
    success: function(data){
      //실행문
      //특정 데이터를 가져오는 방법 1번
      // console.log($(data).find("item"));
      //특정 데이터를 가져오는 방법 2번
      // console.log($("item",data));
      $("item",data).each(function(){
        // console.log($(this).find("link").text())
        // console.log($("link",this).text())//바로 위랑 같은 코드. 더 짧음.

        // link text 가져오기
        let linkText = $("link",this).text();

        //description text 가져오기
        let desText = $("description",this).text();

        $("dl").append("<dt><a href='"+linkText+"'>"+linkText+"</a></dt><dd>"+desText+"</dd>")
      })
    } //key값의 value값을 함수로 받아옴
  });

//button에 on class를 추가하여 dl노출을 toggle형태로 구현하시오
  $("button").click(function(){
    //실행구문
    
  });
});//document ready
