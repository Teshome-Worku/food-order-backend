const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const orderRoutes = require('./routes/order');
const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menu")
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes)

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});