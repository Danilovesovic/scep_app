const express = require('express');
const router = express.Router();

router.use('/', require('./home-route'));
router.use('/students', require('./students-route'));
router.use('/courses', require('./courses-route'));
router.use('/enrollments', require('./enrollments-route'));


module.exports = router;