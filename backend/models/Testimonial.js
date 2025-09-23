const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String },
    rating: { type: Number, required: true },
    title: { type: String },
    review: { type: String, required: true },
    roomType: { type: String },
    stayDuration: { type: String }
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);
