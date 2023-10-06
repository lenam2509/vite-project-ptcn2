const userModels = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userController = {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await userModels.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    message: 'Email không tồn tại'
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Mật khẩu không đúng'
                });
            }
            const payload = { id: user._id, name: user.name, email: user.email, role: user.role };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
            // add token to cookie
            res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.status(200).json({ token: token, user: payload });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

    



    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            const user = await userModels.findOne({ email });
            if (user) {
                return res.status(400).json({
                    message: 'Email đã tồn tại'
                });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const payload = { name, email, password: hashedPassword };
            const newUser = new userModels(payload);
            await newUser.save();
            res.status(201).json({ newUser });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    }
}

module.exports = userController;