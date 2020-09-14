require("dotenv").config();

const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log(`Connected to ${url}`)
);

const personSchema = mongoose.Schema({
  name: { type: String, minlength: 3, unique: true, required: true },
  number: { type: String, minlength: 8, required: true },
});
personSchema.plugin(uniqueValidator);

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("person", personSchema);
