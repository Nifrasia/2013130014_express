var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', staffController.staff);

/* http://localhost:3000/staff/<id> */
router.get('/:id', staffController.show);

router.delete('/:id', staffController.destroy);

router.put('/:id', staffController.update);

router.post('/', [
    body('name').not().isEmpty().withMessage("Please enter Staff's name."),
    body('salary').not().isEmpty().withMessage("Please enter Staff's salary.")
], staffController.insert);
  
module.exports = router;