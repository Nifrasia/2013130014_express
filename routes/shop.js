var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.shop);

router.get('/menu', shopController.menu);

router.get('/:id', shopController.show);

router.post('/', shopController.insert);
  
module.exports = router;