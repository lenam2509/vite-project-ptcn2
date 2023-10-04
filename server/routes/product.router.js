const express = require('express');
const router = express.Router();
const db = require('../db/conectDB');
const uploadCloud = require('../config/upload.config');
const cloudinary = require('cloudinary').v2;

// get all product
router.get('/', (req, res) => {
    db.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    });
});

// get product by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM product WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err);
        }
    });
});

// delete product by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM product WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Product Deleted' });
        }
        else {
            console.log(err);
        }
    });
});

// insert product
router.post('/', uploadCloud.single('thumbnail'), (req, res) => {
    const { name, price, description, category_id } = req.body;
    const fileData = req.file;
    const thumbnail = fileData.path;
    const query = `INSERT INTO product (name, price, description, thumbnail, category_id) VALUES ('${name}', '${price}', '${description}', '${thumbnail}', '${category_id}')`;
    db.query(query, [name, price, description, thumbnail, category_id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Thêm thành công' });
        }
        else {
            console.log(err);
            res.status(400).json({ mesagge: 'Có lỗi xảy ra' });
            if (fileData) {
                cloudinary.uploader.destroy(fileData.filename);
            }
        }
    });
});

// update product
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, description, category_id } = req.body;
    const query = `UPDATE product SET name = '${name}', price = '${price}', description = '${description}', category_id = '${category_id}' WHERE id = '${id}'`
    db.query(query, [name, price, description, category_id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Sửa thành công' });
        }
        else {
            console.log(err);
            res.json({ mesagge: 'Có lỗi xảy ra' });
        }
    });
});

module.exports = router;