#### Write the mongo db code that adds 10 documents to the collection "coll" with field name and age, but age is not to appear in all the documents, and some documents are to have birthdays.

```
db.coll.insertMany([
    { name: "Alice", age: 28 },
    { name: "Bob" }, // no age
    { name: "Charlie", age: 35, hiredate: "1987-03-15" },
    { name: "Diana", age: 22 },
    { name: "Ethan" }, // no age
    { name: "Fiona", hiredate: "1990-07-20" }, // no age
    { name: "George", age: 40 },
    { name: "Hannah", age: 29, hiredate: "1994-01-08" },
    { name: "Ivan" }, // no age
    { name: "Julia", age: 31 }
])
```
#### Convert SELECT count(*) from salesdata to mongo db
```
db.salesdata.aggregate([
    { $count: "total_count" }
])
```
#### How can I list the columns/fields in a mongo db collection
```
db.yourCollectionName.find().limit(1).pretty()
```
```
db.yourCollectionName.aggregate([
    { $project: { arrayOfKeyValues: { $objectToArray: "$$ROOT" } } },
    { $unwind: "$arrayOfKeyValues" },
    { $group: { _id: null, allKeys: { $addToSet: "$arrayOfKeyValues.k" } } }
])
```
####  Convert this select distinct category from super; 
```
db.super.aggregate([
    { $group: { _id: "$category" } }
])
```
#### Let's add a count for each Category
```
db.super.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } }
])
```
#### Calculate the  totol Sales for each category
```
db.super.aggregate([
    { $group: { _id: "$category", totalSales: { $sum: "$salesAmount" } } }
])
```
#### Total sales by Category

```
db.super.aggregate([
    { $group: { _id: "$category", totalSales: { $sum: "$sales" } } }
])
```





