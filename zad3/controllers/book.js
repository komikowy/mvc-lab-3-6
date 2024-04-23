const Book = require('../models/Book');
const User = require('../models/User');

const getBookDetails = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getAll().find(book => book.id == bookId);
  const didUserBorrowTheBook = User.getAll().find(user => user.id == userId)?.findBorrowedBookById(bookId);
  res.render("book-details", { title: `${book.title} by ${book.author}`, book, didUserBorrowTheBook });
};

const postBookBorrow = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getAll().find(book => book.id == bookId);
  const user = User.getAll().find(user => user.id == userId);
  if (book && user) {
    book.borrow();
    user.borrowBook(book);
    res.redirect("/books/borrow/success");
  } else {
    res.redirect("/404");
  }
};

const getBookBorrowSuccess = (req, res) => {
  res.render("success", { title: "Success", message: "Book borrowed successfully" });
};

const postBookReturn = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getAll().find(book => book.id == bookId);
  const user = User.getAll().find(user => user.id == userId);
  if (book && user) {
    book.return();
    user.returnBook(bookId);
    res.redirect("/books/return/success");
  } else {
    res.redirect("/404");
  }
};

const getBookReturnSuccess = (req, res) => {
  res.render("success", { title: "Success", message: "Book returned successfully" });
};

module.exports = {
  getBookDetails,
  postBookBorrow,
  getBookBorrowSuccess,
  postBookReturn,
  getBookReturnSuccess
};
