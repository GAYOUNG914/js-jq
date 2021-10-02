$(function(){
  /*script 영역 file input 사용 예*/
  // 마우스를 올렸을때
  // 업로드 가능한 파일의 용량은 300kb입니다.
  // 마우스를 내렸을때
  // 해당문구 삭제
  $(":file").mouseover(function(){
    $(this).after("<p>업로드 가능한 파일의 용량은 300kb입니다.</p>");
  }).mouseout(function(){
    $(this).next().remove();
  });


  // javascript FileReader

  // function readURL(input) {
  //   if(input.files && input.files[0]){
  //     let reader = new FileReader();
  //     reader.onload = function(e){
  //       console.log(e.target)
  //       $("#image").attr("src",e.target.result);
  //     }
  //     reader.readAsDataURL(input.files[0])
  //   }
  // }
  //
  // $("#imgInput").change(function(){
  //   // console.log(this)
  //   readURL(this)
  // })


});//document ready
