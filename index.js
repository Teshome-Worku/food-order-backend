const express = require('express');
const app = express();
app.use(express.json());
const orderRoutes = require('./routes/order');
app.use("/order", orderRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to Food Order App Backend");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})