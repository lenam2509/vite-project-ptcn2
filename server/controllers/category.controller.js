const categoryModel = require('../models/category.model');

const categoryController = {

    async addCategory(req, res) {
        const { name } = req.body;
        try {
            const category = new categoryModel({ name });
            await category.save();
            res.status(201).json({ category });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

    async getCategories(req, res) {
        try {
            const categories = await categoryModel.find();
            res.status(200).json({ categories });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

}

module.exports = categoryController;