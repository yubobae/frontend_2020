// 콜백함수와 프로미스
//일반적인 콜백함수의 형태
Users.findOne('zero', (err,user) => {
    if(err) {
        return console.log(err);
    }
    console.log(user);
    Users.update('zero', 'nero', (err,updateUser) => {
        console.log(updateUser)
    });
    
});
console.log('다 찾았니?');
// 단점. 콜백함수의 경우 실행순서를 파악하기 어렵다.
// 콜백이 연달아 이어지는 경우.
//비동기에 콜백이 들어가는경우 그다음 쿼리문은 콜백문에 추가식으로 작성하게됨. (콜백헬,콜백지옥이라고 부른다.)

//콜백함수의 단점을 보완해주는 프로미스를 사용할수있게됨.

Users.findOne('zero')
.then((user)=>{//비동기
    console.log(user);
    return Users.update('zero','nero');
})
.then((updateUser)=>{//비동기
    console.log(updateUser);
    return Users.remove('nero');
})
.then((removerUser)=>{//비동기 
    console.log(removerUser);
})
.catch((err)=>{//err는 마지막에 한번에 작성3
    console.log(err);
});
console.log('다 찾았니?');
//이렇게 비동기가 순차적으로 실행됨. (비동기의 순서를 지정함.)