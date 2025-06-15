import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"


dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI; // Use uppercase and underscore for env vars

if (!MONGODB_URI) {
  console.error("❌ Error: MONGODB_URI is not defined in your .env file.");
  process.exit(1);
}

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit if unable to connect
  });

// Test route for browser
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Your actual route
app.use("/book", bookRoute);
app.use("/user", userRoute);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
