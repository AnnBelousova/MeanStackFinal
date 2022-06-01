const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishListSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type:String,
		require:true,
	},
	price: {
		type: Number,
		require:true,
	},
	quantity: {
		type: Number,
		require:[true, "please add quantity"],
	}
});
module.exports = mongoose.model('WishList',wishListSchema)

