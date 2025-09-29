require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const testimonialsRoute = require("./routes/testimonials");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/testimonials", testimonialsRoute);
app.use("/api/messages", messageRoutes);

// Root route
app.get("/", (req, res) => res.send("Calm Rest Backend is running"));

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
