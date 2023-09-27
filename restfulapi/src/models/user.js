const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
    useremail: {
        type: String,
        required: true,
        unique: [true, 'Email id is already present'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type: String,
        required: true
    },

});

const User = new mongoose.model('User', userSchema);
module.exports = User;
