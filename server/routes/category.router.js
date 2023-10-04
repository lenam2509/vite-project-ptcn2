const express = require('express');
const router = express.Router();
const db = require('../db/conectDB');

// get all category
router.get('/', (req, res) => {
    db.query('SELECT * FROM category', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    });
});

// get category by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM category WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err);
        }
    });
});

// delete category by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM category WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Category Deleted' });
        }
        else {
            console.log(err);
        }
    });
});

// insert category
router.post('/', (req, res) => {
    const { name } = req.body;
    const query = `INSERT INTO category (name) VALUES ('${name}')`
    db.query(query, [name], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Thêm thành công' });
        }
        else {
            console.log(err);
            res.json({ mesagge: 'Có lỗi xảy ra' });
        }
    });
});

// update category
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const query = `UPDATE category SET name = '${name}' WHERE id = ${id}`
    db.query(query, [name, id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Cập nhật thành công' });
        }
        else {
            console.log(err);
            res.json({ mesagge: 'Có lỗi xảy ra' });
        }
    });
});

module.exports = router;