const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('searchParams:', myURL.searchParams);

console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));
console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());


myURL.searchParams.append('filter','es3'); //&filter=es3
myURL.searchParams.append('filter','es5');//&filter=es3&filter=es5
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');//&filter=es6 기존에 있던 값을 지우고 //&filter=es6로 변경됨.
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');//&기존에 있던 값을 지운다.
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString(): ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
/*
노드 searchParams의 메서드는 FormData나 URLSearchParams 객체에도 비슷하게 쓰인다.
*/