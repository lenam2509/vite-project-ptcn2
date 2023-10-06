const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Product name is required'],
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Product description is required'],
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: [true, 'Product price is required'],
        maxlength: 32
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Product category is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required']
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        type: String,
    },
    photo_id: {
        type: String,
    },
    shipping: {
        type: Boolean,
        required: false,
        default: false
    },
    hot: {
        type: Boolean,
        required: false,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);


