const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String },
  product_description: { type: String },
  product_price: { type: Number },
  product_quantity: { type: Number, default: 1 },
  product_cover_image: { type: String },
  product_images: [
    {
      image: { type: String },
    },
  ],
  product_category: { type: String },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
  product_reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      review: { type: String },
      rating: { type: Number },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
