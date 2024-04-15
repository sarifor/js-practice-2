const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS 설정
app.use((req, res, next) => {
  console.log(req.get('Origin')); // null

  // 모든 도메인의 요청을 허용하도록 설정
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 허용할 메서드 및 헤더 설정
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Preflight 요청에 대한 처리
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Preflight 요청에 대해 200 상태 코드를 반환하여 허용
  } else {
    next(); // 다음 미들웨어로 이동
  }
});

// 루트 경로에 대한 응답 설정
app.get('/', (req, res) => {
  res.send('Express 서버가 정상적으로 실행 중입니다.');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});