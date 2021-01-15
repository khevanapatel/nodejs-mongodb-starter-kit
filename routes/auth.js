const express = require('express'),
    router = express.Router(),
    doLogin = require('../controller/AuthController').doLogin;

router.post('/', [doLogin]);

module.exports = router;