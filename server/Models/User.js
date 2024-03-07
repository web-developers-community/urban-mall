const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email exists already!"],
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  address_book: [
    {
      delievery_address: {
        type: String,
      },
      payment_address: {
        type: String,
      },
    },
  ],
});
const User = mongoose.model("User", userSchema);

userSchema.pre("save", async (next) => {
  if (!this.isModified) {
    await bcrypt.hash(this.password, 10);
    return next();
  } else {
    next();
  }
});

module.exports = User;
