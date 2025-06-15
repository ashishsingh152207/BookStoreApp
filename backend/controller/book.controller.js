import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // Use capital 'B' and plural for clarity
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books", error: error.message });
  }
};
