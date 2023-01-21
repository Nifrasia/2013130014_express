var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', userController.index );

router.get('/bio', userController.bio);

router.post('/', [
    body('name').not().isEmpty().withMessage("Please enter Name."),
    body('email').not().isEmpty().withMessage("Please enter Email.").isEmail().withMessage("Email type is wrong."),
    body('password').not().isEmpty().withMessage("Please enter Password.").isLength({ min: 5 }).withMessage("Password must be over 5 letter.")
], userController.register);
  
module.exports = router;
