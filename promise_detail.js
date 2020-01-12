//promise 생성 

const plus = new Promise((resolve, reject) => {
    //여기서 조건문을 작성 코딩을 시작ㄱ3.
    const a = 1;
    const b = 2;

    if(a + b > 2) {
        resolve(a+b);//성공
    } else {
        reject(a+b);//실패
    }
});
//resolve와 reject가 매개변수인 함수를 넣는다.
//resolve는 성공했을 때 (성공매세지??)
//reject는 실패메세지

plus
    .then((success)=>{ //resolve가 실행되면 실행.
        console.log(success)
    })
    .chatch((fail)=>{ //reject 가 실행되면 chatch가 실행
        console.log(fail)
    });


    //프로미스는 결과값을 가지고있는 상태이며, 그 결과 값을 원하는 순서에 가져와 사용할 수 있다. (콜백함수의 경우 콜백값이 바로 사용됨)