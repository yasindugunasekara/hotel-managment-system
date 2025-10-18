const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Room name
  category: { type: String }, // e.g. Air Conditioned
  images: [{ type: String }], // Array of image URLs
  price: { type: Number, required: true }, // Price per night
  rating: { type: Number, default: 0 }, // Average rating
  size: { type: String }, // e.g. "25 sqm"
  guests: { type: Number }, // Number of guests allowed
  bed: { type: String }, // e.g. "King Bed"
  amenities: [{ type: String }], // ["WiFi", "Hot Water"]
  features: [
    {
      name: { type: String }, // e.g. "High-Speed WiFi"
      icon: { type: String }, // store icon name as string ("Wifi", "AirVent", "Space")
    },
  ],
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Room", roomSchema);
