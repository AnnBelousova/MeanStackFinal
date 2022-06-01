const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
let Contact = require('../models/Contact');

const uuid = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');



//route Get /api/contacts
//desc Get all Contacts
//access public
router.get('/', authMiddleware, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id });
        res.send(contacts);
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

//route Get /api/contacts/:id
//desc Get contact by id
//access public
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }
        res.send(contact);
    } catch (err) {
        return res.status(500).send('Server error');
    }
});


//route Post /api/contacts
//desc Insert contact details
//access public
router.post(
    '/',
    authMiddleware,
    [
        check('firstname', 'firstname ie required').not().isEmpty(),
        check('lastname', 'lastname ie required').not().isEmpty(),
        check('email', 'Please enter valid email').not().isEmpty().isEmail(),
        check('message', 'message need to be 5 char or more').isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newContact = await Contact.create({
                user: req.user.id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                message: req.body.message,
            });
            res.send(newContact);
        } catch (err) {
            return res.status(500).send('Server error');
        }
    }
);


//route delete /api/contacts
//desc delete contact by id
//access public
router.delete('/', async (req, res) => {
    try {
        const contact = await Contact.findOneAndRemove({ _id: req.body.id });
        if (!contact) {
            return res.status(404).send('Contact not found');
        }

        res.send('Contact deleted');
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

//route put api/contacts
//desc update contact
//access public
router.put('/', async (req, res) => {
    try {
        const contact = await Contact.findById(req.body.id);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }
        contact.firstname = req.body.firstname;
        contact.lasttname = req.body.lastname;
        contact.email = req.body.email;
        contact.message = req.body.message;
        await contact.save();
        res.send(contact);
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

module.exports = router;