const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  checkIn: String,
  checkOut: String,
  guests: Number,
  roomType: String,
  specialRequest: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
