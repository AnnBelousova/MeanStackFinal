const express = require("express");

let USER = require("../models/User");

const uuid = require("uuid");

const router = express.Router();

const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

require("dotenv").config();

router.post(
  "/",
  [
    check("fName", " first name is required").notEmpty(),
    check("lName", " Last name is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("address", "Address is required").notEmpty(),
    check("city", "City is required").notEmpty(),
    check("country", "Country is required").notEmpty(),
    check("postalCode", "Postal Code is required").notEmpty(),
    check("password", "password should be minimum 5 letters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const salt = await bcrypt.genSalt(10);
      let newpass = await bcrypt.hash(req.body.password, salt);
      const newUser = await USER.create({
        fName: req.body.fName,
        lName: req.body.lName,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        email: req.body.email,
        password: newpass,
      });
      const payload = {
        user: {
          id: newUser.id,
          name: newUser.name,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
        if (err) throw err;
        res.send({ token });
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
);


module.exports = router;
