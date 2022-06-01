const express = require("express");
const Help = require("../models/Help");
let HELP = require("../models/Help");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const payload = await HELP.find().exec();
    res.send(payload);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
