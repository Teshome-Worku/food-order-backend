const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/jwt");

const router = express.Router();

// Hardcoded admin credentials (for now)
const ADMIN_EMAIL = "admin@mamifood.com";
const ADMIN_PASSWORD = "123456";

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ role: "admin" },
        JWT_SECRET, { expiresIn: "60" }
    );

    res.json({ token });
});

module.exports = router;