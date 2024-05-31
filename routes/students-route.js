const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/StudentsController');

router.get('/', StudentsController.index);

router.get('/create', StudentsController.create);

router.get('/show/:id', StudentsController.show);

// POST
router.post('/create', StudentsController.store);

module.exports = router;