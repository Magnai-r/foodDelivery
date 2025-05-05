import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const secret_key = process.env.SECRET_KEY;
export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    console.log(header, "FROM HEAD");

    if (!header)
      return res.send({
        success: false,
        message: "token not found",
      });

    const token = header.split(" ")[1];
    console.log(token, "token");

    const decode = jwt.verify(token, secret_key);
    console.log(decode, "decode");
    if (!decode._doc._id) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }
    req.body = { ...req.body, user: decode._doc };
    console.log(decode._doc._id, "decode");
    next();
  } catch (error) {
    return res.send({
      message: "token expired",
      error: error,
    });
  }
};
