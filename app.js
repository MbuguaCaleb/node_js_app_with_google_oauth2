const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");

//Loading our config that has environmental variables into our app.js
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//initializing morgan for logging requests to the console.
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `)
);
