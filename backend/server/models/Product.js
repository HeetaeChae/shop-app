import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    category: String,
    descriptionShort: String,
    descriptionLong: String,
    image: Array,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };