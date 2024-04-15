const express = require('express');
// const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cookieParser());

// CORS 설정
app.use((req, res, next) => {
  console.log(req.get('Origin')); // http://127.0.0.1:5500

  // 자격 증명이 함께 전송되는 요청에 대한 응답 헤더엔 Access-Control-Allow-Origin에 * 못 씀
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // 정확한 오리진 정보 명시

  // 허용할 메서드 및 헤더 설정
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, API-Key');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // 자격 증명 정보가 담긴 요청을 서버에서 받아들이기로 함

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

app.patch('/', (req, res) => {
  // console.log(req.headers.cookie); // 클라이언트로부터 받은 cookie 확인
  res.send('PATCH 메서드를 허용합니다.');
})

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});