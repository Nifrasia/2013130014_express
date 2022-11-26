var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   res.send('Hello Kitty');
  res.status(200).json({
    fullname: 'Pronkamol Sathiwawong'
  });
});

router.get('/bio', function(req, res, next) {
    res.status(200).json({
      fullname: 'Pronkamol Sathiwawong',
      nickname: 'Toung',
      hobby: 'reading, gaming',
      gitusername: 'Nifrasia'
    });
  });
  

module.exports = router;
