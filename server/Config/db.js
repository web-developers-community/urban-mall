const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("Database connection established"))
    .catch((err) => console.log(err.message));
};

module.exports = connectDatabase;
