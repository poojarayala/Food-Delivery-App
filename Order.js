const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  address: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ["Online Payment", "Cash on Delivery"],
    required: true
  },
  status: {
    type: String,
    enum: ["Order Placed", "Preparing Food", "Out for Delivery", "Delivered"],
    default: "Order Placed"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", OrderSchema);
