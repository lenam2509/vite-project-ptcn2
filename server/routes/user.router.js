const express = require('express');
const router = express.Router();
const db = require('../db/conectDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require('express');

// get all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    });
});

// get user by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err);
        }
    });
});

// delete user by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'User Deleted' });
        }
        else {
            console.log(err);
        }
    });
});


// insert user
router.post('/', (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const query = `INSERT INTO users (fullname, email, password) VALUES ('${fullname}', '${email}', '${hashPassword}')`
    db.query(query, [fullname, email, hashPassword], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Thêm thành công' });
        }
        else {
            console.log(err);
            res.json({ mesagge: 'Có lỗi xảy ra' });
        }
    });
});

// update user
router.put('/:id', (req, res) => {
    const { fullname, email, password } = req.body;
    const { id } = req.params;
    const query = `UPDATE users SET fullname = '${fullname}', email = '${email}', password = '${password}' WHERE id = ${id}`
    db.query(query, [fullname, email, password, id], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'User Updated' });
        }
        else {
            console.log(err);
        }
    });
});

// login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}'`
    db.query(query, [email], (err, rows, fields) => {
        if (!err) {
            if (rows.length > 0) {
                const user = rows[0];
                const checkPassword = bcrypt.compareSync(password, user.password);
                if (checkPassword) {
                    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
                    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 });
                    res.json({ token: token, mesagge: 'Đăng nhập thành công', user: user });
                }
                else {
                    res.status(400).json({ mesagge: 'Sai mật khẩu' });
                }
            }
            else {
                res.status(400).json({ mesagge: 'Email không tồn tại' });
            }
        }
        else {
            console.log(err);
        }
    });
});

// register
router.post('/register', (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const query = `INSERT INTO users (fullname, email, password) VALUES ('${fullname}', '${email}', '${hashPassword}')`
    db.query(query, [fullname, email, hashPassword], (err, rows, fields) => {
        if (!err) {
            res.json({ mesagge: 'Đăng ký thành công' });
        }
        else {
            console.log(err);
        }
    });
});



module.exports = router;