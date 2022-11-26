const express = require("express");
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

const AuthMiddleware = require("../middleware/Auth")

const router = express.Router();
const Book = require("../models/bookModel");

router.use(AuthMiddleware)

// GET all book
router.get("/", getBooks);

// GET a single book by it's ID
router.get("/:id", getBook);

// POST Create a new book
router.post("/", createBook);

// PATCH Update a book by it's id
router.patch("/:id", updateBook);

// DELETE delete a book by it's ID
router.delete("/:id", deleteBook);

module.exports = router;
