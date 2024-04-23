const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/set', userController.getSetUserSession);
router.post('/set', userController.setUserSession);

module.exports = router;
