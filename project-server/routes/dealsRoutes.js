const express = require('express');

let DEAL = require('../models/Deals');

const authMiddleware = require('../middlewares/authMiddleware');

const uuid = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');

router.get('/',authMiddleware, async (req, res) => {
  try {
    const itemDB = await DEAL.find({ user: req.user.id });
    res.send(itemDB);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

router.post('/',authMiddleware,  [check('url','url is required').notEmpty()],
[ check('html','html is required').notEmpty()]
,async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()})
    }
    const newitem = await DEAL.create({
      url: req.body.url,
      html: req.body.html,
    });
    res.send(newitem);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});


module.exports = router;