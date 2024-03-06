const express = require("express");
const connectDatabase = require("./config/db");
require("dotenv").config({
  path: "./config/.env",
});
const app = express();
app.listen(process.env.PORT || 3000, () => {
  console.log(`server listening on ${process.env.PORT}`);
});
connectDatabase();
