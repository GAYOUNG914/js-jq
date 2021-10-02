// $(document).ready(function(){
//   //실제 코딩 영역
//   console.log('this is jquery')
// });

$(function(){// $(document).ready(f(x))의 축약형
  // console.log('jquery 축약형 document ready 표기')
  // console.log($('ul li:nth-child(2)'))

  // // 실행코드 입력영역
  // $('li').css('color','red')
  // // id속성으로 li 색상을 모두 다르게 적용하시오.
  // $('#first').css('color','red');
  // $('#second').css('color','blue');
  // $('#third').css('color','yellow');
  // $('#fourth').css('color','green');
  // // 구조선택자로 li 배경색을 모두 다르게 적용하시오.
  // $('li:nth-child(1)').css('background','green');
  // $('li:nth-child(2)').css('background-color','yellow');
  // $('ul li:nth-child(3)').css('background-color','blue');
  // $('li:nth-child(3)').css('background-color','red');
  // // 각의 선택하는 방식을 다르게 해서 font-size 조정
  // $('li#first').css('font-size','21px');

  // var num = 30;//변수 선언과 초기화 javascript동일
  // $('.first, .third, .fourth').css('left', num);//다중선택은 ','구분한다.
  // $('.first span').css('color','red');// 자손 선택자 : css자손 선택자와 동일한 방식
  // $('.first > span').css('color','blue');// 자식 선택자 : css자식 선택자와 동일한 방식
  // $('*').css('color','violet');// 모든요소 선택자 : css 유니버스 선택자와 동일한 방식
  // $('.second + li').css('color','blue');
  $('.second ~ li').css('color','red')
  $('li:not(:first-child)').css('color','blue');

  // 메뉴구조 선택하고 style적용
  $('span').css('color','red');
  $('.submenu > li > a > p > span').css('color','blue');
  $('.submenu > li > a > p > span:empty').css('background','red');
});
