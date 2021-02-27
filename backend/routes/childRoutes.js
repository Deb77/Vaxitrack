const { Router } = require('express');
const childController = require('../controllers/childController');

const router = Router();

router
    .post('/', childController.child_post)
    .put('/:id', childController.child_update)
    .delete('/:id', childController.child_delete)
    .post('/children', childController.children_post)
    .get('/allchildren', childController.children_all_get);

module.exports = router;


