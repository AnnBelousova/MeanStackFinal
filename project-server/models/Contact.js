const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('Contact', contactSchema);