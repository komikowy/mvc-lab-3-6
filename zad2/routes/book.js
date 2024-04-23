const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

router.get('/', bookController.getBooksList);

module.exports = router;
