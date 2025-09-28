const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Create new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings from DB
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    console.error("Fetch bookings error:", err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

module.exports = router;
