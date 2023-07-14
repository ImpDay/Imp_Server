const express = require('express');
const mysql = require('mysql2');

const app = express();

// MySQL 연결 생성
const connection = mysql.createConnection({
  host: 'localhost', // MySQL 호스트 주소
  user: 'root', // MySQL 사용자명
  password: 'roqkf##01', // MySQL 비밀번호
  database: 'imp_db' // 사용할 데이터베이스명
});

// MySQL 연결 테스트
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL에 성공적으로 연결되었습니다.');
  }
});

// 루트 엔드포인트에 대한 핸들러
app.get('/', (req, res) => {
  // MySQL 쿼리 실행 예시
  connection.query('SELECT * FROM MEMOS', (err, results) => {
    if (err) {
      console.error('MySQL 쿼리 오류:', err);
      res.status(500).send('서버 오류');
    } else {
      res.json(results); // 쿼리 결과를 JSON 형식으로 응답
    }
  });
});

app.get('/data', (req, res) => {
  connection.query('SELECT * FROM MEMOS', (err, results) => {
    if (err) {
      console.error('MySQL 쿼리 오류:', err);
      res.status(500).send('서버 오류');
    } else {
      res.json(results);
    }
  });
});


// 서버를 시작하고 지정된 포트에서 연결을 수신합니다.
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
