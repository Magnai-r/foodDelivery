import express from "express";
import {
  createFoodOrder,
  getOrderByUser,
} from "../controllers/foodOrderController.js";

export const orderRouter = express.Router();

orderRouter.post("/", createFoodOrder).get("/:userId", getOrderByUser);
