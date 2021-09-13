const router = require('express').Router()
const adminCtrl = require("../controllers/adminCtrl")
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.get('/result',adminCtrl.getResult);


module.exports = router;