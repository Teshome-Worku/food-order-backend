const express = require("express");
const router = express.Router();
const requireAdmin = require("../middleware/requireAdmin");
const {
    createOrder,
    getOrders,
    updateOrderStatus,
} = require("../controllers/orderController");

// Public route (customers)
router.post("/", createOrder);

// Protected routes (admin only)
router.get("/", requireAdmin, getOrders);
router.put("/:id", requireAdmin, updateOrderStatus);

module.exports = router;
