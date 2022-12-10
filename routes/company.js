var express = require('express');
var router = express.Router();
const comController = require('../controllers/comController')

/* GET users listing. */
router.get('/', comController.company);

router.post('/', comController.insert)

router.delete('/:id', comController.destroy);

router.put('/:id', comController.update);
  
module.exports = router;