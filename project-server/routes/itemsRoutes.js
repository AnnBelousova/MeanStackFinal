const express = require("express");

let ITEM = require("../models/Items");

const authMiddleware = require("../middlewares/authMiddleware");

const uuid = require("uuid");

const router = express.Router();

const { check, validationResult } = require("express-validator");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const itemDB = await ITEM.find();
    //const itemDB = await ITEM.find({ user: req.user.id });
    res.send(itemDB);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await ITEM.findById(req.params.id);
    if (!item) {
      return res.status(404).send("item not found");
    }
    res.send(item);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

router.post(
  "/",
  //authMiddleware,
  [check("name", "name is required").notEmpty()],
  [check("price", "price is required").notEmpty()],
  [check("quantity", "img_url is required").notEmpty()],
  [check("img_url", "img_url is required").notEmpty()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newitem = await ITEM.create({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        img_url: req.body.img_url,
      });
      res.send(newitem);
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);

router.delete("/", async (req, res) => {
  try {
    const item = await ITEM.findOneAndRemove({ _id: req.body.id });
    if (!item) {
      return res.status(404).send("item not found");
    }

    res.send("item deleted");
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

router.put("/", async (req, res) => {
  try {
    const item = await ITEM.findById(req.body.id);
    if (!item) {
      return res.status(404).send("item not found");
    }
    item.name = req.body.name;
    item.price = req.body.price;
    item.quantity = req.body.quantity;
    item.img_url = req.body.img_url;
    await item.save();
    res.send(item);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
