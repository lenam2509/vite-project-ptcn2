const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            }
        ],
        required: true
    },
    total: {
        type: Number,
        default: 0
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Bank'],
        default: 'COD'
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Delivered', 'Cancelled', 'Completed'],
        default: 'Pending'
    },
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
    phone: {
        type: Number,
        default: 0,
        required: [true, 'User phone is required'],
    },
    address: {
        type: String,
        default: '',
        required: [true, 'User address is required'],
    },
    cityDistricts: {
        type: String,
        default: '',
        required: [true, 'User cityDistricts is required'],
    },
    note: {
        type: String,
        default: ''
    },
    billId: {
        type: String,
        default: ''
    },


}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);    
