const { Router } = require('express');
const parentController = require('../controllers/parentController');

const router = Router();

router
    .post('/signup', parentController.signup_post)
    .post('/login', parentController.login_post);

module.exports = router;