const path = require('path');

console.log(
    path.sep, //  '\\'
    path.delimiter, // ';'  환경변수?
    path.dirname(__filename),
    path.extname(__filename),
    path.basename(__filename),
    path.parse(__filename),
    path.format({
        root:'c:\\',
        dir:'C:\\repository\\frontend_2020\\node_keyword',
        base:'path.js',
        ext:'.js',
        name:'path',
    }),
    path.normalize('C:\\repository\\frontend_2020\\node_keyword'),//경로 오타일때 재대로 나오게 수정해준다.
    path.isAbsolute('./'),//현재 경로가 상대경로인지 절대경로인지 체크
    path.relative('C:\\repository\\frontend_2020\\node_keyword', 'c:\\'),//상대경로 검색



    //중요합니다!!
    path.join(__dirname,'..','/global','.'),//절대 경로 무시하고 합침 -> 상대경로로 바꿀때
    path.resolve(__dirname,'..','/global','.'),//절대 경로 고려하고 합침. 루트는 c:\(윈도)" 절대경로로 바꿀때

);

