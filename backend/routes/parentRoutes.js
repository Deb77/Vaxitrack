const { Router } = require('express');
const parentController = require('../controllers/parentController');

const router = Router();

router
    .post('/signup', parentController.signup_post)
    .post('/login', parentController.login_post)
    .post('/forgotPassword', parentController.forgotPassword_post)
    .post('/checkToken', parentController.checkToken_post)
    .put('/updatePassword', parentController.updatePassword_put);

module.exports = router;