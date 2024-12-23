const router = require("express").Router();
const Booking = require("../models/Booking");

// Create a new booking
router.post("/add", (req, res) => {
    const { title, review, rating } = req.body;

    // Basic validation for required fields
    if (!title || !review || !rating) {
        return res.status(400).json({ status: "Error", message: "All fields are required." });
    }

    const newBooking = new Booking({
        title,
        review,
        rating,
    });

    newBooking
        .save()
        .then(() => res.status(201).json({ status: "Booking added successfully!" }))
        .catch((err) => {
            console.error("Error adding booking:", err);
            res.status(500).json({ status: "Error adding booking", error: err.message });
        });
});

// Read all bookings
router.get("/", (req, res) => {
    Booking.find()
        .then((bookings) => res.json(bookings))
        .catch((err) => {
            console.error("Error fetching bookings:", err);
            res.status(500).json({ status: "Error fetching bookings", error: err.message });
        });
});

// Update a booking by ID
router.put("/update/:id", async (req, res) => {
    const bookingId = req.params.id;
    const { title, review, rating } = req.body;

    if (!title || !review || !rating) {
        return res.status(400).json({ status: "Error", message: "All fields are required." });
    }

    const updatedBooking = {
        title,
        review,
        rating,
    };

    try {
        const updatedBookingRecord = await Booking.findByIdAndUpdate(bookingId, updatedBooking, { new: true });
        if (updatedBookingRecord) {
            res.status(200).json({
                status: "Booking updated successfully!",
                booking: updatedBookingRecord,
            });
        } else {
            res.status(404).json({
                status: "Booking not found",
                message: `No booking found with ID ${bookingId}`,
            });
        }
    } catch (err) {
        console.error("Error updating booking:", err);
        res.status(500).json({ status: "Error updating booking", error: err.message });
    }
});

// Delete a booking by ID
router.delete("/delete/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);
        if (deletedBooking) {
            res.status(200).json({ status: "Booking deleted" });
        } else {
            res.status(404).json({ status: "Booking not found" });
        }
    } catch (err) {
        console.error("Error deleting booking:", err);
        res.status(500).json({ status: "Error deleting booking", error: err.message });
    }
});

// Get a booking by ID
router.get("/get/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const bookingDetails = await Booking.findById(bookingId);
        if (bookingDetails) {
            res.status(200).json({ status: "Booking fetched", booking: bookingDetails });
        } else {
            res.status(404).json({ status: "Booking not found" });
        }
    } catch (err) {
        console.error("Error fetching booking:", err);
        res.status(500).json({ status: "Error fetching booking", error: err.message });
    }
});

module.exports = router;
