import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/categoryController.js";

export const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getCategories)
  .get("/:id", getCategoryById);
