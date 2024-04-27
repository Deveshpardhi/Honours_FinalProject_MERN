const express = require('express');
const router = express.Router();
const Order = require('../../dblayer/order');
const OrderProduct = require('../../dblayer/orderproduct');
const mongoose = require('mongoose');
const { Error, Schema } = mongoose;
const GenerateResponse = require('../../utils/response_creator');
const { isUserAdmin } = require('../../utils/dbutils');
const User = require('../../dblayer/user');
const auth = require('../../middlewares/auth');

// Middleware to set user ID and authentication status
function setUserAuth(req, res, next) {
    req.uid = req.headers.uid || null;
    req.isAuthenticated = !!req.headers.uid;
    next();
}

// Authentication middleware
router.use(auth);
router.use(setUserAuth);

// Function to get orders
async function getOrders(uid = null) {
    // the following query is an aggregation to be performed on the orders collection
    const queryAllOrders = [
        // Populate user who has added an order
        {
            $lookup: {
                from: "users",
                localField: "uid",
                foreignField: "id",
                as: "userDetails"
            }
        },
        {
            $unwind: "$userDetails"
        },
        // Populate products from products collection based on product id
        {
            $lookup: {
                from: "products",
                localField: "products._id",
                foreignField: "id",
                as: "productDetails"
            }
        },
        // Stage merges the products from
        // Stage unwinds the products array
        {
            $unwind: "$productDetails"
        }
    ];

    // Add a match stage if uid is provided
    if (uid) {
        queryAllOrders.unshift({
            $match: {
                uid: uid
            }
        });
    }

    // Execute the aggregation query
    return await Order.aggregate(queryAllOrders);
}

// HTTP get method to get list of orders, this function would get Invoked at /orders/ API call
router.get('/', async (req, res) => {
    try {
        const orders = await getOrders(req.uid);
        res.json(new GenerateResponse(true, undefined, orders));
    } catch (error) {
        res.status(500).json(new GenerateResponse(false, error.message));
    }
});

// HTTP post method to add a new order, this function would get invoked at /orders/ API call
router.post("/", async (req, res) => {
    try {
        const orderObj = req.body;
        const order = new Order({ uid: req.uid });
        if (orderObj instanceof Array) {
            orderObj.map(p => order.products.push({ _id: mongoose.Types.ObjectId.createFromHexString(p.id), qty: p.qty }));
        }
        await order.save();
        res.json(new GenerateResponse(true));
    } catch (error) {
        res.status(500).json(new GenerateResponse(false, error.message));
    }
});

module.exports = router;
