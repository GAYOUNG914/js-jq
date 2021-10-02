'use strict'

class User {
  constructor(name,age,local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  //소개
  introduce(){
    try{
      alert('안녕하세요,'+this.local+'에 사는'+this.age+'살,'+this.name+'입니다.');
      throw new Error('헐!! 으악!! 에러!!');
      // console.log('진행'); // 에러발생 시 해당 구문은 진행이 되지 않고 catch로 이동
    }catch(e){
      alert(e.name+','+e.message)
    }finally{
        // console.log('진행');// 에러발생과 상관없이 진행
        console.log('프로그램 종료');
    }
  }
}

let user1 = new User('jane','25','LA');
console.log(user1);
user1.introduce();

// try {
//   //정상적인 코드라면 이코드는 아무런 문제없이 블럭의 시작부터 끝까지 실행된다.
//   //하지만  경우에 따라 예외가 발생할 수 있다.
    // 예외는 throw 문에 의해 직접적으로 발생할 수도 있고,
    //또는 예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.
// }
// catch{
// //이 블로 내부의 문장들은 오직 try 블럭에서 예외가 발생할 경우에만 실행된다.
// //이 문장들에서 지역 변수 e를 사용하여 Error 객체 또는 앞에서 던진 다른 값을 참조할 수 있다.
// //이 블럭에서는 어떻게든 그 예외를 처리할 수도 있고, 그냥 아무것도 하지 않고 예외를 무시 할 수도 있다.
// //아니면 throw를 사용해서 예외를 다시 발생시킬 수도 있다.
// }
// finally{
//  //이  블러에는 try 블러에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
//  //이 코드는 try 블럭이 어떻게든 종료되면 실행된다.
//  //1.정상적으로 블럭의 끝에 도달했을때
//  //2.break, continue 또는 return 문에의해서
//  //3.예외가 발생했지만 catch 구문에서 처리했을때
//  //4.예외가 발생했고 그것이 잡히지 않은 채 퍼저나갈 때
// }
