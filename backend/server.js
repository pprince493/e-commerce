import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./config/du.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from "cors";
//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//midelware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to ecommerse website",
  });
});

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port  ${PORT}`.bgCyan
      .white
  );
});
