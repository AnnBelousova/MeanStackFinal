const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftCardSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    id: {
        type: Number,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    quantity: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('GiftCard', giftCardSchema);