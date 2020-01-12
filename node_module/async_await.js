// 기존 프로미스
/*
Users.findOne('zero')
.then((user)=>{//비동기
    console.log(user);
    return Users.update('zero','nero');})
.then((updateUser)=>{//비동기
    console.log(updateUser);
    return Users.remove('nero');})
.then((removerUser)=>{//비동기 
    console.log(removerUser);})
.catch((err)=>{//err는 마지막에 한번에 작성3
    console.log(err);
});
console.log('다 찾았니?');
*/

// ECMA 2017 에서 anync와 await이 추가되면서 프로미스의 모양이 변함.

async function foo() {
    try{
        const user = await Users.findOne('zero');
        const updateUser = await Users.update('zero', 'nero');
        const removerUser = await Users.remove('nero');
        
        console.log(user);
        console.log(updateUser);
        console.log(removerUser);
        
    }
    catch (err){
        console.error(err);
    }
    
    console.log('다 찾았니');
};

foo();

