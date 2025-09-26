require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const testimonialsRoute = require('./routes/testimonials');
const roomRoutes = require("./routes/roomRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/rooms", roomRoutes); // Room routes (fully RESTful)
app.use("/api/testimonials", testimonialsRoute); // Testimonial routes (fully RESTful)

// Root route
app.get('/', (req, res) => res.send('Calm Rest Backend is running'));

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB ✅');
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
