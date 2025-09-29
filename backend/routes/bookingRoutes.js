const express = require("express");
const Booking = require("../models/Booking"); // Your Booking model
const router = express.Router();

// Create new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // ✅ Return success message and booking data
    res.status(201).json({
      success: true,      // frontend expects this
      booking,            // optional: return saved booking object
    });
  } catch (err) {
    // ✅ Return error message properly
    res.status(400).json({
      success: false,     // frontend expects this
      error: err.message,
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().lean(); // lean() gives plain JS objects
    const uniqueBookings = Array.from(new Map(bookings.map(b => [b._id.toString(), b])).values());
    res.json(uniqueBookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
