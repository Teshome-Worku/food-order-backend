const orders = [];

exports.createOrder = (req, res) => {
    const order = req.body;
    if (!order.name || !order.items) {
        return res.status(400).json({
            message: "Name and items are required"
        })
    } else if (order.items.length === 0) {
        return res.status(400).json({
            message: "At least one item is required"
        })
    }
    order.id = orders.length + 1; // Simple ID generation
    order.createdAt = new Date();
    orders.push(order);
    // Here you would typically save the order to a database
    res.status(201).json({
        message: "Order created successfully",
        order: orders
    })

    console.log(`
        Order receive:
        Name: ${order.name}
        Items: ${order.items.map(item => item.name).join(", ") }
    `);

}

exports.getOrders = (req, res) => {
    res.status(200).json(orders)
}