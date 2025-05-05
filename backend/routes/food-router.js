import express from "express";
import {
  createFood,
  getFoodsByCategoryId,
} from "../controllers/foodController.js";
import { verifyToken } from "../Middleware/auth.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", verifyToken, createFood).get("/", getFoodsByCategoryId);
