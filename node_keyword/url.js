//가장 많이 사용하게 되는 url모듈 - 자유롭게 분할하고 조합하게 해준다.
const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL();', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------------------');
const parsedURL = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedURL);

// 기존방식 (url.parse)는 호스트가 없을 때도 쓸 수 있다.
// WHATWG 방식(url.URL)은 search  처리가 편리하다.