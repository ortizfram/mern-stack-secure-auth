import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js"
dotenv.config();
const port = process.env.PORT || 8080;
const DB_URI= process.env.DB_URI;

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", authRoute)

app.listen(port, () => {
  mongoose.connect(DB_URI).then((run) => {
    console.log(`DB connected & api runnig on http://localhost:${port}`);
  }).catch((error)=>{console.error("Error connecting DB or running api",error.message)})
});
