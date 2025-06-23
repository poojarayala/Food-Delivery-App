const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place a new order
router.post("/", async (req, res) => {
  const { userId, items, totalPrice, address, paymentMethod } = req.body;

  try {
    const newOrder = new Order({
      userId,
      items,
      totalPrice,
      address,
      paymentMethod
    });

    await newOrder.save();
    res.status(201).json({ msg: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all orders for a user
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
