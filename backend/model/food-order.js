import mongoose, { Schema } from "mongoose";

const FoodOrderItem = new mongoose.Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const FoodOrder = new mongoose.Schema({
  /*Order Identity */
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  /* Order Details*/
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: {
    type: [FoodOrderItem],
    required: true,
  },
  /*Order Status*/
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodOrderModel = mongoose.model("FoodOrder", FoodOrder);
