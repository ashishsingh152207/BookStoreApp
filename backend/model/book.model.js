import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,    // changed IMAGE to image
  title: String
}, { timestamps: true }); // optional: adds createdAt and updatedAt

const Book = mongoose.model("Book", bookSchema); // "Book" will become "books" collection

export default Book;
            