import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/userController.js";
export const userRouter = express.Router();

userRouter.post("/", createUser).get("/", getUsers).get("/:id", getUserById);
