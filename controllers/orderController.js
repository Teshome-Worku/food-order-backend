// TODO: replace with database
let orders = [];

const createOrder = (req, res) => {
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

    res.status(201).json({
        message: "Order created",
        orderId: savedOrder.id,
    });
};


const getOrders = (req, res) => {
    res.status(200).json({ orders });
};




module.exports = {
    createOrder,
    getOrders,
};