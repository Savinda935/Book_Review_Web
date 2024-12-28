const router = require("express").Router();
const BookReview = require("../models/BookReview");

// Create a new book review
router.post("/add", (req, res) => {
    const { bookTitle, author, review, rating } = req.body;

    if (!bookTitle || !author || !review || !rating) {
        return res.status(400).json({ status: "Error", message: "All fields are required." });
    }

    const newBookReview = new BookReview({ bookTitle, author, review, rating });

    newBookReview
        .save()
        .then(() => res.status(201).json({ status: "Book review added successfully!" }))
        .catch((err) => res.status(500).json({ status: "Error adding book review", error: err.message }));
});

// Read all book reviews
router.get("/", (req, res) => {
    BookReview.find()
        .then((reviews) => res.json(reviews))
        .catch((err) => res.status(500).json({ status: "Error fetching reviews", error: err.message }));
});

// Update a book review by ID
router.put("/update/:id", async (req, res) => {
    const { bookTitle, author, review, rating } = req.body;

    try {
        const updatedReview = await BookReview.findByIdAndUpdate(
            req.params.id,
            { bookTitle, author, review, rating },
            { new: true }
        );
        if (updatedReview) {
            res.status(200).json({ status: "Book review updated successfully!", review: updatedReview });
        } else {
            res.status(404).json({ status: "Book review not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "Error updating review", error: err.message });
    }
});

// Delete a book review by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedReview = await BookReview.findByIdAndDelete(req.params.id);
        if (deletedReview) {
            res.status(200).json({ status: "Book review deleted" });
        } else {
            res.status(404).json({ status: "Book review not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "Error deleting review", error: err.message });
    }
});

// Get a book review by ID
router.get("/get/:id", async (req, res) => {
    try {
        const review = await BookReview.findById(req.params.id);
        if (review) {
            res.status(200).json({ status: "Book review fetched", review });
        } else {
            res.status(404).json({ status: "Book review not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "Error fetching review", error: err.message });
    }
});

module.exports = router;
