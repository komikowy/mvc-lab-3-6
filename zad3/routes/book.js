const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

router.get('/books/:id', bookController.getBookDetails);
router.post('/books/borrow/:id', bookController.postBookBorrow);
router.post('/books/return/:id', bookController.postBookReturn);

router.get('/books/borrow/success', bookController.getBookBorrowSuccess);
router.get('/books/return/success', bookController.getBookReturnSuccess);

module.exports = router;
