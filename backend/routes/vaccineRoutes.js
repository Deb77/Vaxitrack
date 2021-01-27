const { Router } = require('express');
const vaccineController = require('../controllers/vaccineController');

const router = Router();

router
    .post('/', vaccineController.vaccine_post)
    .put('/:id', vaccineController.vaccine_update);

module.exports = router; 