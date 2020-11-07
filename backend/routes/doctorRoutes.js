const { Router } = require('express');
const doctorController = require('../controllers/doctorController');

const router = Router();

router.post('/login', doctorController.login_post);

module.exports = router;