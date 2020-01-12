const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside: {
            key : 'value',
        },
    },
};

console.time('전체시간'); 

console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log( string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요');

console.dir( obj, { colors:false, depth: 2});
console.dir( obj, { colors:true, depth: 1});

console.time('시간 측정'); ///console.tiem('인자'), console.timeEnd('인자'); 인자의 값이 같아야 합니다.
for (let i = 0; i<100000; i++) {
    continue;
}

console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적'); //호출 스텍을 추적 할 수있다.
}

function a() {
    b();
}
a();

console.timeEnd('전체시간');