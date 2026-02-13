const express = require("express");
const router = express.Router();
const requireAdmin = require("../middleware/requireAdmin");
const { createOrder, getOrders } = require("../controllers/orderController");

// Public route (customers)
router.post("/", createOrder);

// Protected route (admin only)
router.get("/", requireAdmin, getOrders);

module.exports = router;
