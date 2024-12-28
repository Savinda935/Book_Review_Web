const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookReviewSchema = new Schema({
    bookTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);
module.exports = BookReview;
