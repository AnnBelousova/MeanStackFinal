const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    firstname: {
        type: String,
        require: false,
    },
    lastname: {
        type: String,
        require: false,
    },
    phoneNumber: {
        type: Number,
        require: false,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: false,
    },
    city: {
        type: String,
        require: false,
    },
    country: {
        type: String,
        require: false,
    },
    postalcode: {
        type: String,
        require: false,
    }
});

module.exports = mongoose.model('Customer', customerSchema);