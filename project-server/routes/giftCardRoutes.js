const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
let GiftCard = require('../models/GiftCard');

const uuid = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');


//route Get /api/giftcards
//desc Get all GiftCards
//access public
router.get('/', authMiddleware, async (req, res) => {
    try {
        const giftcards = await GiftCard.find();
        res.send(giftcards);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
});

router.post(
    "/",
    authMiddleware,
    [check("id", "id is required").notEmpty()],
    [check("img", "img is required").notEmpty()],
    [check("title", "title is required").notEmpty()],
    [check("quantity", "quantity is required").notEmpty()],
    [check("price", "price is required").notEmpty()],
    [check("category", "category is required").notEmpty()],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newgiftCard = await GiftCard.create({
                id: req.body.id,
                img: req.body.img,
                title: req.body.title,
                quantity: req.body.quantity,
                price: req.body.price,
                category: req.body.category
            });
            res.send(newgiftCard);
        } catch (err) {
            return res.status(500).send("Server error");
        }
    }
);

//route delete /api/giftcards
//desc delete giftcard by id
//access public
router.delete('/', authMiddleware, async (req, res) => {
    try {
        const giftCard = await GiftCard.findOneAndRemove({ _id: req.body.id });
        if (!giftCard) {
            return res.status(404).send('GiftCard not found');
        }

        res.send('Giftcard deleted');
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

module.exports = router;