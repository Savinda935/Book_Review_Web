const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8083; // Default port

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Verify MongoDB connection string
if (!process.env.MONGODB_URL) {
    console.error("Error: MONGODB_URL is not defined in .env");
    process.exit(1);
}

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongodb connection successful!"))
    .catch((err) => console.error("Mongodb connection error:", err));

// Import and use the bookReview routes
const bookReviewRouter = require("./routes/bookReview");
app.use("/bookreview", bookReviewRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
