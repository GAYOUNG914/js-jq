$(function(){
  // script 영역 attr() 사용 예
  // get attribute
  let num = $("#wrap_id").attr("class");
  console.log("get class attribute : "+num);
  // let numSplit = num.split(' ');
  // console.log(numSplit[1])
  // console.log(num)
  // document.body.getElementById("wrap_id").getAttribute("class")
  num = $(".wrap_inner").attr("id");
  console.log("get id attribute : "+num);

  //set attribute
  $(".items").attr("title","this is items");
  $("ipnut").attr("checked",false); //input check 해제
  $("ipnut").attr("checked",true); //input checked
  // conmsole.log($("input").attr("checked"));
  $("span").removeAttr("class");

  // addClass
  $("body").addClass("bg_red");
  $("body").addClass("bg_blue");
  $("body").addClass("bg_yellow");
  $("body").addClass("bg_black");

  //removeClass
  $("body").removeClass("bg_black");
 });
