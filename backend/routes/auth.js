import express from "express";
import { login, sendMailer } from "../controllers/auth.js";

export const authRouter = express.Router();

authRouter.post("/", login).get("/mail", sendMailer);
