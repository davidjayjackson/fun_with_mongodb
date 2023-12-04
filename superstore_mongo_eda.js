db.store.aggregate([
    { $addFields: { 
        formattedOrderDate: { $dateFromString: { dateString: "$order_date" } } 
    }},
    { $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$formattedOrderDate" } },
        totalSales: { $sum: "$sales" },
        orderCount: { $sum: 1 }
    }},
    { $sort: { _id: 1 } },
    { $out: "monthly_sales_summary" }
]);

db.store.aggregate([
    { $group: {
        _id: "$category",
        totalSales: { $sum: "$sales" }
    }},
    { $sort: { totalSales: -1 } },
    { $out: "category_sales_summary" }
]);

db.store.aggregate([
    { $group: {
        _id: "$product_name",
        totalSales: { $sum: "$sales" }
    }},
    { $sort: { totalSales: -1 } },
    { $out: "product_sales_summary" }
]);
