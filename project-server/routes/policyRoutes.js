const express = require("express");
let POLICY = require("../models/Policy");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const payload = await POLICY.find().exec();
    res.send(payload);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
