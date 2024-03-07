const express = require("express");
const connectDatabase = require("./Config/db");
const user_route = require("./Routes/User");
require("dotenv").config({
  path: "./Config/.env",
});
const app = express();
app.listen(process.env.PORT || 3000, () => {
  console.log(`server listening on ${process.env.PORT}`);
});
connectDatabase();

app.use("/api/v1", user_route);
