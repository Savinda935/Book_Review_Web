const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    title: {
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
    },

});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
