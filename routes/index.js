const formController = require('../controllers');

const router= require('express').Router();

router.post('/form',formController)

module.exports = router