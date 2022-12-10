var express = require('express');
var router = express.Router();
const comController = require('../controllers/comController')

/* GET users listing. */
router.get('/', comController.company );
  
module.exports = router;
