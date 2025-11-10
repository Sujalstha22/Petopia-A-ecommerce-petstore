import mongoose from "mongoose";

let productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  manufactureDate: {
    type: Date,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

//model

export const Product = mongoose.model("Product", productSchema);
