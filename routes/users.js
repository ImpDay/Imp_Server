var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  res.send('responadsfd with a resource');
});


// router.get('/users', (req, res) => {
//   connection.query('SELECT * FROM Users', (err, results) => {
//     if (err) {
//       console.error('MySQL 쿼리 실행 오류:', err);
//       res.status(500).json({ error: '서버 오류' });
//       return;
//     }
//     res.json(results);
//   });
// });
module.exports = router;
