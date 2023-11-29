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
#### Convert select Category, count(*) as row_count, min(sales) as min_sales, max(sales) as max_sales, avg_sales(sales) as avg_sales from super group by Category, add total sales to above statement

```
db.super.aggregate([
    {
        $group: {
            _id: "$Category",
            row_count: { $sum: 1 },
            min_sales: { $min: "$sales" },
            max_sales: { $max: "$sales" },
            avg_sales: { $avg: "$sales" },
            total_sales: { $sum: "$sales" }
        }
    }
])
```
#### Will this command insert both a name and age into Mongodb: db.coll.insertOne({name: "Jane"},{age: x})
```
db.coll.insertOne({ name: "Jane", age: x })
```
#### calculate the sum of age
```
db.coll.aggregate([
    { $group: { _id: null, totalAge: { $sum: "$age" } } }
])
```
#### Now let's find the documents where the name is Dick
```
db.coll.find({ name: "Dick" })
```
#### How do I make a collection from another collection?
```
db.sourceCollection.aggregate([
    // ... your aggregation stages ...
    { $out: "newCollection" }
])
```
```
db.sourceCollection.aggregate([
    // ... your aggregation stages ...
    { $merge: { into: "newCollection", whenMatched: "replace", whenNotMatched: "insert" } }
])
```
#### Select date, category,  COUNT() from data group by date,  category
```
db.data.aggregate([
    {
        $group: {
            _id: { date: "$date", category: "$category" },
            count: { $sum: 1 }
        }
    }
])
```
#### Write the code so calculate the total rows, min, max, average sales by date and create a new collection calleded salesbydate using the  summary code above

```
db.data.aggregate([
    {
        $group: {
            _id: "$date",
            totalRows: { $sum: 1 },
            totalSales: { $sum: "$sales" },
            minSales: { $min: "$sales" },
            maxSales: { $max: "$sales" },
            averageSales: { $avg: "$sales" }
        }
    },
    { $out: "salesByDate" }
])
```
#### How do I do select name =Dick or age = 10 from coll
```
db.coll.find({ $or: [{ name: "Dick" }, { age: 10 }] })
```
#### Write the mongo db code that adds 10 documents to the collection "coll" with field name and age, but age is not to appear in all the documents, and some documents are to have birthdays.

```
db.coll.insertMany([
    { name: "Alice", age: 28 },
    { name: "Bob" }, // no age
    { name: "Charlie", age: 35, birthday: "1987-03-15" },
    { name: "Diana", age: 22 },
    { name: "Ethan" }, // no age
    { name: "Fiona", birthday: "1990-07-20" }, // no age
    { name: "George", age: 40 },
    { name: "Hannah", age: 29, birthday: "1994-01-08" },
    { name: "Ivan" }, // no age
    { name: "Julia", age: 31 }
])
```
#### Find the document where the birthday is blank
```
db.coll.find({ $or: [{ birthday: { $exists: false } }, { birthday: "" }] })
```
### Count the number of documents that don't have birthdays
```
db.coll.countDocuments({ birthday: { $exists: false } })
```
#### Count the number of documents where the name begins with "D"
```
db.coll.countDocuments({ name: /^D/ })
```




