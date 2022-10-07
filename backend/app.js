import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRouter from "./routes/index.js";

import connectDB from "./config/dbConnection.js";

const app = express();
dotenv.config();

const db = await connectDB();

//Cors Settings
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Change this later to restrict it to react app only
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-auth-token, Origin, Accept"
  );
  next();
});

app.use("/api/v1/", mainRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening in on port ${process.env.PORT}!`);
});
