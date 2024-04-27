// mern-shopping-backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopping-app', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Item Model
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

app.post('/items/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    newItem.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.json('Item added successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
