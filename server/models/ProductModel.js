const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        type: String,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;