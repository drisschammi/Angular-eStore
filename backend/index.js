// Environment Configuration
require("dotenv").config();

// Module Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Route Imports
const productCategories = require("./routes/productCategories");
const products = require("./routes/products");
const user = require("./routes/users");

// App Initialization
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/productCategories", productCategories);
app.use("/products", products);
app.use("/users", user);

// Server Setup
const server = app.listen(PORT, () => {
  console.log(`App is running on the port - ${PORT}`);
});