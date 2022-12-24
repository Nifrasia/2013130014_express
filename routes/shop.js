var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.shop);

router.get('/menu', shopController.show);
  
module.exports = router;