const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { createOrder, getOrders } = require("../controllers/orderController");

// Public route (customers)
router.post("/", createOrder);

// Protected route (admin only)
router.get("/", verifyToken, getOrders);

module.exports = router;