Write the mongo db code that adds 10 documents to the collection "coll" with field name and age, but age is not to appear in all the documents, and some documents are to have birthdays.

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
