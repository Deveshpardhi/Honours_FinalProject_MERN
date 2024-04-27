const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../dblayer/product');
const GenerateResponse = require('../../utils/response_creator');
const Order = require('../../dblayer/order');

// HTTP get method to get list of products, this function would get invoked at /products/ API call
router.get('/', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(new GenerateResponse(true, undefined, products));
    } catch (error) {
        res.status(500).json(new GenerateResponse(false, error.message));
    }
});

// HTTP post method to add a new product, this function would get invoked at /products/ API call
router.post("/", async (req, res) => {
    try {
        const productObj = req.body;
        await Product.create(productObj);
        const products = await getProducts();
        res.json(new GenerateResponse(true, undefined, products));
    } catch (error) {
        res.status(500).json(new GenerateResponse(false, error.message));
    }
});

// HTTP delete method to delete an existing product, this function would get invoked at /products/ API call
router.delete('/:id', async (req, res) => {
    try {
        const count = await Order.countDocuments({ "products._id": mongoose.Types.ObjectId(req.params.id) });
        if (count > 0) {
            return res.json(new GenerateResponse(false, "Cannot delete the product as it is already ordered by a user."));
        }
        const delResult = await Product.deleteOne({ _id: req.params.id });
        if (delResult.deletedCount === 1) {
            const products = await getProducts();
            res.json(new GenerateResponse(true, undefined, products));
        } else {
            res.json(new GenerateResponse(false, "Product to delete not found."));
        }
    } catch (error) {
        res.status(500).json(new GenerateResponse(false, error.message));
    }
});

async function getProducts() {
    const products = await Product.find({}).lean();
    return products instanceof Array ? products : [];
}

module.exports = router;
