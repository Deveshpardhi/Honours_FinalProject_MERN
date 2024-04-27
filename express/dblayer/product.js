const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    // Add more fields as needed
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product, ProductSchema };
