var express = require('express');
var router = express.Router();
const comController = require('../controllers/comController')
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')

/* GET users listing. */
router.get('/', [passportJWT.islogin, checkAdmin.isAdmin], comController.company);

router.post('/', [passportJWT.islogin, checkAdmin.isAdmin], comController.insert)

router.delete('/:id', [passportJWT.islogin, checkAdmin.isAdmin], comController.destroy);

router.put('/:id', [passportJWT.islogin, checkAdmin.isAdmin], comController.update);
  
module.exports = router;