const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const url =
  "mongodb+srv://mydatabase:mydatabase@cluster0.gf5ci9c.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();

const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err });
});

app.listen(4000, function () {
  console.log("listening...");
});
