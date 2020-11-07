const { Router } = require('express');
const vaccineController = require('../controllers/vaccineController');

const router = Router();

router.put('/:id', vaccineController.vaccine_update);

module.exports = router; 