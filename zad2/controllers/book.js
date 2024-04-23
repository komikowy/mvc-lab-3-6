const Book = require('../models/book');

const getBooksList = (req, res) => {
  const userId = req.session.userId;
  const books = Book.getAll();
  res.render("books", { title: "Books", userId, books });
};

module.exports = {
  getBooksList
};
