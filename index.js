const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const orderRoutes = require('./routes/order');
app.use("/order", orderRoutes);

app.use(cors());
const menuItems = require("./data/menu");
// TEMP: mock orders storage 
const orders = [

];
// creating order api
app.post("/api/orders", (req, res) => {
    const order = req.body;

    if (!order || !order.items || order.items.length === 0) {
        return res.status(400).json({ message: "Invalid order" });
    }

    const savedOrder = {
        id: Date.now(),
        ...order,
        status: "pending",
    };

    orders.push(savedOrder);

    console.log("New order received:", savedOrder);

    res.status(201).json({
        message: "Order created",
        orderId: savedOrder.id,
    });
});

//getting the orders
app.get("/api/orders", (req, res) => {
        res.status(200).json({ orders })

    })
    //creating menu api
app.get("/api/menu", (req, res) => {
    res.status(200).json(menuItems);
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});