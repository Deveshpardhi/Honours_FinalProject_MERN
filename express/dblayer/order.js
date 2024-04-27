const mongoose = require('mongoose');
const { OrderProduct, OrderProductSchema } = require('./orderproduct');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    type: mongoose.Types.ObjectId,
    products: [OrderProductSchema]
}, { timestamps: { createdAt: 'addedAt', updatedAt: 'modifiedAt' } });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
