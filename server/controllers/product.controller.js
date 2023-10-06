const ProductModel = require('../models/product.model');
const cloudinary = require('cloudinary').v2;

const ProductController = {
    async addProduct(req, res) {
        const { name, description, price, category, quantity, sold, shipping } = req.body;
        const fileData = req.file
        const photo = fileData.path
        const photo_id = fileData.filename
        try {
            const payload = { name, description, price, category, quantity, sold, shipping, photo, photo_id }
            const product = new ProductModel(payload);
            await product.save();
            res.status(201).json({ product });
        } catch (error) {
            const fileData = req.file
            if (fileData) {
                await cloudinary.uploader.destroy(fileData.filename);
            }
            res.status(500).json({
                message: 'Server error'
            });
            console.log(error);
        }
    },

    async getAllProducts(req, res) {
        try {
            const products = await ProductModel.find().populate('category');
            res.status(200).json({ products });
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
            console.log(error);
        }
    },

    async getOneProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductModel.findById(id).populate('category');
            res.status(200).json({ product });
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
            console.log(error);
        }
    },

    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, description, price, category, quantity, sold, shipping } = req.body;
        const fileData = req.file

        try {
            if (fileData) {
                const photo = fileData.path
                const photo_id = fileData.filename
                const oldProduct = await ProductModel.findById(id);
                await cloudinary.uploader.destroy(oldProduct.photo_id);
                const payload = { name, description, price, category, quantity, sold, shipping, photo, photo_id }
                const product = await ProductModel.findByIdAndUpdate(id, payload, { new: true });
                res.status(200).json({ product });
            } else {
                const payload = { name, description, price, category, quantity, sold, shipping }
                const product = await ProductModel.findByIdAndUpdate(id, payload, { new: true });
                res.status(200).json({ product });
            }
        } catch (error) {
            const fileData = req.file
            if (fileData) {
                await cloudinary.uploader.destroy(fileData.filename);
            }
            res.status(500).json({
                message: 'Server error'
            });
            console.log(error);
        }
    },
    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductModel.findById(id);
            await cloudinary.uploader.destroy(product.photo_id);
            await product.deleteOne();
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
            console.log(error);
        }
    }
}

module.exports = ProductController;

