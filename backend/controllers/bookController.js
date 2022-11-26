const { default: mongoose } = require("mongoose");
const Book = require("../models/bookModel");

// Create a book
const createBook = async (req, res) => {
  const { title, author, price } = req.body;

  //add to a database
  try {
    const book = await Book.create({
      title,
      author,
      price,
      user_id: req.user._id,
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

// Read all books
const getBooks = async (req, res) => {
  const { _id } = req.user;
  const books = await Book.find({user_id: _id});

  res.status(200).json(books);
};

//Read on book by it's ID
const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book not found!" });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "Book not found!" });
  }

  res.status(200).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book not found!" });
  }

  const book = await Book.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!book) {
    return res.status(404).json({ error: "Book not found!" });
  }

  res.status(200).json(book);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book not found!" });
  }

  const book = await Book.findByIdAndDelete(id);

  if (!book) {
    return res.status(404).json({ error: "Book not found!" });
  }

  res.status(200).json(book);
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
