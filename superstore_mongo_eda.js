db.store.aggregate([
    { $addFields: { 
        formattedOrderDate: { $dateFromString: { dateString: "$order_date" } } 
    }},
    { $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$formattedOrderDate" } },
        totalSales: { $sum: "$sales" },
        orderCount: { $sum: 1 }
    }},
    { $sort: { _id: 1 } }
]);
