const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// ✅ GET /api/testimonials - fetch all testimonials
router.get('/get', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching testimonials' });
  }
});

// ✅ POST /api/testimonials - add new testimonial
router.post('/post', async (req, res) => {
  try {
    const { name, country, rating, reviewTitle, review, roomType, stayDuration } = req.body;

    // Basic validation
    if (!name || !country || !rating || !reviewTitle || !review || !roomType || !stayDuration) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTestimonial = new Testimonial({
      name,
      country,
      rating,
      reviewTitle, // 👈 updated
      review,
      roomType,
      stayDuration,
    });

    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error saving testimonial' });
  }
});

module.exports = router;
