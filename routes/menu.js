const express = require("express");
const menuItems = require("../data/menu");

const router = express.Router();

// Public route: return all menu items
router.get("/", (req, res) => {
  res.json(menuItems);
});

module.exports = router;

