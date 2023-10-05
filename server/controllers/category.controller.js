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
    }

}

module.exports = categoryController;