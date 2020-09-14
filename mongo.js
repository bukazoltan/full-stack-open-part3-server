const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("connected to db"));

const personSchema = {
  name: String,
  number: String,
};

const Person = mongoose.model("person", personSchema);

if (process.argv.length === 3) {
  console.log("phonebook:");
  Person.find({}).then((result) => {
    result.forEach((item) => {
      console.log(`${item.name} ${item.number}`);
    });
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });
  person.save().then(() => {
    console.log("note saved.");
    mongoose.connection.close();
  });
}
