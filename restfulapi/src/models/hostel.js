const mongoose = require('mongoose');
const validator = require('validator');

const hostelSchema = new mongoose.Schema({
    ownername: {
        type: String,
        required: true,
        minlength: 3
    },
    hostelname: {
        type: String,
        required: true,
        minlength: 3
    },
    owneremail: {
        type: String,
        required: true,
        unique: [true, 'Email id is already present'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    ownerphone: {
        type: String, //
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'any', { strictMode: false })) {
                throw new Error('Invalid phone number');
            }
        }
    },
    hosteladdress: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    log: {
        type: String,
        required: true
    },
    mess: {
        type: Boolean,
        required: true
    },
    wifi: {
        type: Boolean,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    security: {
        type: Boolean,
        required: true
    },
    filterwater: {
        type: Boolean,
        required: true
    },
    bedsystem: {
        type: Boolean,
        required: true
    },
    hostelimage: [
        {
            type: String,
            required: true,

        }
    ],
    typehostel: {
        type: String,
        required: true
    },
    discription: {
        type: String
    }
});

const HostelOwner = new mongoose.model('HostelOwner', hostelSchema);

module.exports = HostelOwner;