const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    // Always return an array
    res.json(Array.isArray(testimonials) ? testimonials : []);
  } catch (err) {
    console.error(err);
    // Return empty array on error
    res.status(500).json([]);
  }
});

// POST a new testimonial
router.post('/', async (req, res) => {
  try {
    const { name, country, rating, reviewTitle, review, roomType, stayDuration } = req.body;

    if (!name || !country || !rating || !review || !roomType || !stayDuration) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const newTestimonial = new Testimonial({
      name,
      country,
      rating,
      reviewTitle,
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
