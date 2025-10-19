const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// 🟢 Normal Email/Password Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Success
    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟣 Google Login Route
router.post("/google", async (req, res) => {
  try {
    const { name, email, profilePic, provider } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    // If not, create a new user (without password)
    if (!user) {
      user = new User({
        name,
        email,
        profilePic,
        provider: provider || "google",
        password: "", // Leave empty for Google accounts
        role: "user", // Default role, change if needed
      });
      await user.save();
    }

    // Send user info to frontend
    res.status(200).json({
      message: "Google login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic,
      },
    });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({ error: "Server error during Google login" });
  }
});

module.exports = router;
