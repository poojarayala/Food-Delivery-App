const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config();

// 🧹 Drop obsolete index on startup
(async () => {
  try {
    const indexes = await User.collection.indexes();
    const hasUsernameIndex = indexes.some((idx) => idx.name === "username_1");
    if (hasUsernameIndex) {
      await User.collection.dropIndex("username_1");
      console.log("Dropped obsolete index: username_1");
    }
  } catch (err) {
    console.log("Index cleanup error:", err.message);
  }
})();

// ✅ Register Route
router.post("/register", async (req, res) => {
  const { name, contact, address, email, password } = req.body;

  try {
    // Check if user already exists (case-insensitive)
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("🔐 Hashed password during registration:", hashedPassword); // Debugging hash

    // Create and save the new user
    const newUser = new User({
      name,
      contact,
      address,
      email: email.toLowerCase(), // Store email in lowercase
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ msg: "Registration successful", token });
  } catch (err) {
    console.error("Registration error:", err.message);
    if (err.code === 11000) { // Duplicate email error
      return res.status(400).json({ msg: "Email already in use" });
    }
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("📨 Login Request =>", { email, password });

  try {
    // Fetch user from database (case-insensitive)
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ msg: "Login failed. Check email and password." });
    }

    // Trim any extra spaces or hidden characters from the password
    const trimmedPassword = password.trim();
    const storedHash = user.password;

    // Log password and stored hash for debugging
    console.log("🔑 Password entered:", trimmedPassword); // Log the password entered by the user
    console.log("🔐 Stored hash:", storedHash); // Log the stored hashed password from the database

    // Compare entered password with the stored hash
    const isMatch = await bcrypt.compare(trimmedPassword, storedHash);
    console.log("🧪 Password Match Result:", isMatch);

    if (!isMatch) {
      console.log("❌ Incorrect password");
      return res.status(400).json({ msg: "Login failed. Check email and password." });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("✅ Login Success for", email);
    res.status(200).json({ msg: "Login successful", token });
  } catch (err) {
    console.error("🚨 Login Error:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
