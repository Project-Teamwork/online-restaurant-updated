const express = require("express");
const Pizza = require("../models/pizzas");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const response = await Pizza.find({});

    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send("something went wrong");
  }
});

router.post("/create", async (req, res) => {
  try {
    let newPizza = new Pizza(req.body);
    await newPizza.save(req.body);
    res.status(200).send(newPizza);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Pizza.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "item deleted successfuly" });
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Pizza.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send({ message: "item was updated successfully" });
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});
module.exports = router;

