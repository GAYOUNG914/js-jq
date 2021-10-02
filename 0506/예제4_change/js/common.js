$(function(){
  /*script 영역 change() 사용 예*/
  // let num = 1;
  $("select").change(function(){
    // console.log(num)
    // num++;
    let thisVal = $(this).val();// 현재 선택된 select box option의 value 값
    // $("input").val(thisVal);
    $(this).next().find("input").val(thisVal);
    console.log($(this).val())
  });

  /*input text change*/
  $(".input_text_change").change(function(){
    alert("input text 가"+$(this).val()+"로 변경 되었습니다.")
  });
});//document ready
