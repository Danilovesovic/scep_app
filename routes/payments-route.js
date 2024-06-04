const express = require('express');
const router = express.Router();

const PaymentsController = require('../controllers/PaymentsController');



router.get('/', PaymentsController.index);

// POST
router.post('/store', PaymentsController.store);

module.exports = router;