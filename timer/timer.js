const timeout = setTimeout(()=>{
    console.log('1.5초 후에 실행')
}, 1500);


const interval = setInterval(()=>{
    console.log('1초 마다 실행');
}, 1000);

// clearTimeout(timeout);
// clearInterval(interval);


const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);




const im = setImmediate(()=>{ console.log('즉시 실행')}); //즉시 실행되는 setImmediate함수를 이벤트 루프로 보낼때 사용합니다.
// clearImmediate(im);

//비동기로 순서를 바꿔서 실행할 수있도록 사용함. //함수가 즉시 실행됨.