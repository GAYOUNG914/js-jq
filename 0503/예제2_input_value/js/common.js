$(function(){
  /*script 영역 input value 사용 예*/
  $("button").click(function(){
    /*변수선언*/
    let btnNum = $(this);
    // let thisIndex = $(this).index();

    // console.log(btnNum.text())
    if( btnNum.text() == "comfirm"){
      // console.log("E-mail을 저장하였습니다.")
      // let ipValue = $("input").val();// 변수 선언 로직 구현
      // $("p").text(ipValue + "로 전송이 됩니다. 전송을 원하면 전송 버튼을 눌러주세요.")
      // console.log(ipValue)
      $("p").text($("input").val() + "로 전송이 됩니다. 전송을 원하면 전송 버튼을 눌러주세요.");
      btnNum.text("submit");
      // $("button").each(function(i){
      //     if( i == thisIndex ){
      //       $(this).text("submit");
      //     }
      // });
    }else if( btnNum.text() == "reset"){
      // console.log("입력정보를 리셋하였습니다.")
      //초기화 방식 1 : html()
      $("p").html("E-mail : <input type='email' name='name'>");
      //초기화 방식 2 : val()
      // $("p input").val("");
      // btnNum.prev().text("comfirm");
      
      /*each를 사용 comfirm 버튼 리셋*/

      // $("button").each(function(i){// 전역변수를 활용한 로직구현
      //     if( i == thisIndex - 1 && $(this).text() == "submit"){
      //       $(this).text("comfirm");
      //     }
      // });

      // console.log(thisIndex - 1)
      // console.log(btnNum.prev().index())

      $("button").each(function(i){//prev()를  활용한 로직구현
          if( i == btnNum.prev().index() && $(this).text() == "submit"){
            $(this).text("comfirm");
          }
      });

    }else if( btnNum.text() == "submit"){
      // console.log("전송완료 되었습니다.")
      $("p").text("전송완료 되었습니다.");
    }
  })
});//document ready
