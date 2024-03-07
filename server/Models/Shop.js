const { default: mongoose } = require("mongoose");

const shopSchema = new mongoose.Schema({
  shop_name: { type: String },
  shop_description: { type: String },
  shop_address: { type: String },
  shop_phone: { type: String },
  shop_email: { type: String },
  shop_logo: { type: String },
  shop_cover_image: { type: String },
  shop_images: [
    {
      image: { type: String },
    },
  ],
  shop_category: { type: String },
  shop_owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  shop_ratings: [
    {
      reted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rating: { type: Number },
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});
