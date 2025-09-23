const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    reviewTitle: { type: String, required: true, trim: true },
    review: { type: String, required: true, trim: true },
    roomType: { type: String, required: true, trim: true },
    stayDuration: { type: String, required: true, trim: true },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);
