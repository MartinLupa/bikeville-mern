const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        product_id: { type: String },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    shipping: {
      courier_company: { type: String },
      courier_cost: { type: Number },
    },
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
