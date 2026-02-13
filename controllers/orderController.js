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

const VALID_STATUSES = ["pending", "preparing", "ready", "delivered"];

const updateOrderStatus = (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const { status } = req.body;

    if (!status || !VALID_STATUSES.includes(status)) {
        return res.status(400).json({
            message: "Invalid status. Must be one of: pending, preparing, ready, delivered",
        });
    }

    const index = orders.findIndex((o) => o.id === orderId);
    if (index === -1) {
        return res.status(404).json({ message: "Order not found" });
    }

    orders[index] = { ...orders[index], status };
    res.status(200).json({ order: orders[index] });
};

module.exports = {
    createOrder,
    getOrders,
    updateOrderStatus,
};