const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
//const uuid = require('uuid');
const {check, validationResult} = require('express-validator');
let WishList = require('../models/WishList');


router.get('/', 
authMiddleware, 
async (req,res) => {
	try{
		const wishListDB = await WishList.find({user: req.user.id});
		//const wishListDB = await WishList.find();
		console.log(wishListDB)
		res.send(wishListDB);
	}catch(err) {
		return res.status(500).send('server error');
	}

});

router.get('/:id', async (req,res) => {
	try{
		const wishList = await WishList.findById(req.params.id);
		if(!wishList){
			return res.status(404).send('item in Wish List not found');
		}
		res.send(wishList);
	} catch(err){
		return res.status(500).send('server error');
	}
});

router.post(
	'/', 
	authMiddleware,
	[
		check('name', 'name is required').not().isEmpty(),
		check('price', 'price is required ').not().isEmpty(),
		check('quantity', 'quantity is required ').not().isEmpty(),
	],
	async (req,res) => {
	try{
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(400).json({errors: errors.array()});
		}
			const newWishList = await  WishList.create ({
			user:req.user.id,
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity,
		});
		res.send(newWishList);
	}catch {
		return res.status(500).send('server error');
	}

});


router.delete('/', async(req,res) => {
	try{
		const wishList = await WishList.deleteMany();
		if(!wishList){
			return res.status(404).send('collection is empty');
		}
		res.send(wishList);
	}
	catch(err){
		return res.status(500).send('server error');
	}
	});

	router.put('/', async (req,res) => {
		try{
			const wishList = await WishList.findById(req.body.id);
			if(!wishList){
				return res.status(404).send('item in Wish List not found');
			}
			wishList.name = req.body.name;
			wishList.price = req.body.price;
			wishList.quantity = req.body.quantity;		
			await wishList.save();
			res.send(wishList);
		}
		catch(err){
			return res.status(500).send('server error');
	}
	});

module.exports = router;
