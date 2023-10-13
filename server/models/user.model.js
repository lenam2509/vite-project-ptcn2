const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'User name is required'],
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'User email is required'],
    },
    password: {
        type: String,
        required: [true, 'User password is required']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    photo: {
        type: String,
        default: ''
    },
    photo_id: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ''
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);