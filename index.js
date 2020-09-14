const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require("cors");
const Person = require("./models/person");

morgan.token("body", function getBody(req) {
  return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] :response-time ms - :body")
);

app.get("/api/persons/:id", (req, res, next) => {
  let id = req.params.id;
  Person.findById(id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
});

app.delete("/api/persons/:id", (req, res, next) => {
  let id = req.params.id;
  Person.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  let id = req.params.id;
  let newObj = req.body;
  Person.findByIdAndUpdate(id, newObj, {
    runValidators: true,
    context: "query",
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, res, next) => {
  let person = req.body;

  let newPerson = new Person({
    name: person.name,
    number: person.number,
  });

  newPerson
    .save()
    .then((result) => result.toJSON())
    .then((savedPerson) => res.json(savedPerson))
    .catch((err) => next(err));
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => res.json(persons));
});

app.get("/info", (req, res, next) => {
  let date = new Date();
  Person.estimatedDocumentCount((err, result) => {
    if (err) {
      next(err);
    }
    res.send(`<p>Phonebook has info for ${result} people.</p><p>${date}</p>`);
  });
});

const errorHandler = (error, request, response, next) => {
  console.error(error.name);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json(error.message);
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("The server is running on port 3001"));
