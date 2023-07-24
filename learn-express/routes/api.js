const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", function (req, res) {
  res.send({ type: "GET" });
});

router.post("/ninjas", function (req, res) {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja);
  });
  console.log(req.body);
  res.send(req.body);
});

router.put("/ninjas/:id", function (req, res) {
  res.send({ type: "PUT" });
});

router.delete("/ninjas/:id", function (req, res) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(() => {
    res.send("deleted");
  });
  res.send({ type: "DELETE" });
});

module.exports = router;
