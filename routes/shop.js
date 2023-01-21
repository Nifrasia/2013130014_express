var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const { body } = require('express-validator');

router.get('/', shopController.shop);

router.get('/menu', shopController.menu);

router.get('/:id', shopController.show);

router.post('/', [
    body('name').not().isEmpty().withMessage("Please enter Shop's name."),
    body('location.lat').not().isEmpty().withMessage("Please enter Shop's location lat.").isNumeric().withMessage("Please enter location."),
    body('location.lng').not().isEmpty().withMessage("Please enter Shop's location lng.").isNumeric().withMessage("Location type is error."),
    body('photo').not().isEmpty().withMessage("Please enter Shop's photo.")
], shopController.insert);
  
module.exports = router;