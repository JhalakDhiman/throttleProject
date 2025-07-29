const express = require('express');
const router = express.Router();

const {signUp, sendOtp, login, changePassword} = require('../controllers/auth.js');
const {resetPasswordToken, resetPassword} = require('../controllers/resetPassword.js');
const {auth} = require('../middlewares/auth.js')

router.post('/signup',signUp);
router.post('/sendOtp',sendOtp);
router.post('/login',login);

router.post('/changePassword',auth,changePassword);

router.post('/resetPasswordToken',resetPasswordToken);
router.post('/resetPassword',resetPassword);


module.exports = router;