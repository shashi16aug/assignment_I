const express = require('express');
const router = express.Router();
const packtolusUsers = require('../controller/packtolusUsers');
const validator = require('../middleware/apiValidator');


/**
 *  routes for creating user
 */

router.post('/user', packtolusUsers.userCreate);
router.post('/user-login/', packtolusUsers.userLogIn);
router.get('/users/', validator.tokenValidator, packtolusUsers.userList);





module.exports = router;