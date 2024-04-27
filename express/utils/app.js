const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const mongoose = require('mongoose');
const productRouter = require("./routes/products/routes");
const userRouter = require('./routes/users/routes');
const authRouter = require("./routes/auth/routes");
const orderRouter = require('./routes/orders/routes');

mongoose.connect(process.env.MDB_CONN_STR);
mongoose.connection.on("connected", () => console.log('Database connected!'));
mongoose.connection.on("disconnected", () => console.log('Database disconnected!'));
mongoose.connection.on('error', (err) => console.log("Database error", err));

app.use(express.json());
app.use(cors());

// Register middleware with the app instance
app.use(logger);

// Register auth middleware
app.use(auth);

// Route registration for all /users routes
app.use("/users", userRouter);

// Route registration for all /products routes
app.use("/products", productRouter);

// Auth routes
app.use("/auth", authRouter);

// Order routes
app.use("/orders", orderRouter);

// Route registration for all /orders routes
// app.use("/orders", orderRoutes);

// Root route endpoint
app.get("/", (req, res) => {
  // Your root route logic here
});
