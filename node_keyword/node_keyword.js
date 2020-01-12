console.log(__filename);//현재 파일 경로를 알려줍니다.
console.log(__dirname);//현재 파일이 들어있는 경로를 알려줍니다.

//node는 웹이 아닌환경에서 사용되기 때문에 경로 위치를 검색할수있다.

/*
* process객체에는 현재 실행중인 노드 프로그램 정보가 들어있다
* process.version  =>  'v10.16.3'
* process.arch   => 'x64'
* process.platform   => 'win32'
* process.pid    => 7232   현제 실행되고 있는 프로세스 아이디 프로세스가 렉이걸릴 경우 요 메세드를 사용해서 강제 종료
* process.uptime()   => C:\\repository\\frontend_2020\\node_keyword' 108.176  노드프로그램이 실행된지 걸릴 시간.
* process.cwd()  => 프로세스 실행 위치  /  __dirname 파일의 위치
* process.execPath  => 'C:\\Program Files\\nodejs\\node.exe'  노드가 설치되어 있는 위치
* process.cpuUsage() => { user: 140000, system: 78000 }  현재 CPU 사용량
* process.exit()  => 프로세스 종료
*/

for(let i =0; i < 10000; i++) {
    console.log(i);
    process.exit();// process.exit()  => 프로세스 종료
};

// > 0
