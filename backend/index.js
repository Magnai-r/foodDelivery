import express, { json } from "express";
import { connectMongoDB } from "./connectDB.js";
import cors from "cors";
import { userRouter } from "./routes/user-router.js";
import { categoryRouter } from "./routes/category-router.js";
import { FoodRouter } from "./routes/food-router.js";
import { orderRouter } from "./routes/foodOrder-router.js";
import { authRouter } from "./routes/auth.js";
const port = 8000;
const app = express();

connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/food", FoodRouter);
app.use("/order", orderRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
