const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
let Customer = require('../models/Customer');

const uuid = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const User = require('../models/User');



//route Get /api/user
//desc Get the customer
//access public
router.get('/:id', async (req, res) => {
    try {
        const customer = await User.findById({ _id: req.params.id });
        res.send(customer);
    }
    catch (err) {
        return res.status(500).send('Server error');
    }
});

//route Get /api/customers/:emailId
//desc Get customer by emailId
//access public
router.get('/:emailId', async (req, res) => {
    try {
        const customer = await Customer.findOne({ email: req.params.emailId });
        if (!customer) {
            const user = await User.findOne({ email: req.params.emailId });
            if (!user) return res.status(404).send('Customer not found');
            res.send({ firstname: user.name, email: user.email }) ;
        }
        res.send(customer);
    } catch (err) {
        return res.status(500).send('Server error');
    }
});


//route delete /api/customers
//desc delete customer by id
//access public
router.delete('/', async (req, res) => {
    try {
        const customer = await Customer.findOneAndRemove({ _id: req.body.id });
        if (!customer) {
            return res.status(404).send('Customer not found');
        }

        res.send('Customer deleted');
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

//route put api/customer
//desc update customer
//access public
router.put('/', authMiddleware,
    async (req, res) => {
        try {
        let customer = await User.findById(req.body.id);
       
        customer.fName = req.body.firstname;
        customer.lName = req.body.lastname;
        customer.email = req.body.email;
        customer.phoneNumber = req.body.phoneNumber;
        customer.address = req.body.address;
        customer.city = req.body.city;
        customer.country = req.body.country;
        customer.postalCode = req.body.postalCode;
        console.log(customer);
        await customer.save();
        
        res.send(customer);
    } catch (err) {
        return res.status(500).send('Server error');
    }
});

module.exports = router;