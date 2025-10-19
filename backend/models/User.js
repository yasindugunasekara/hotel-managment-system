const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: function() { return this.provider !== "google"; } },
    lastName: { type: String, required: function() { return this.provider !== "google"; } },
    country: { type: String, required: function() { return this.provider !== "google"; } },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: function() { return this.provider !== "google"; } }, // required only for normal signup
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["local", "google"], default: "local" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
