const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    async register(req, res, next) {
        const { email, fullname, password } = req.body;
        if (!email || !fullname || !password) {
            return res.status(400).json({
                status: false,
                message: 'Vui lòng nhập đầy đủ thông tin'
            });
        }

        const currentUser = await UserModel.findOne({ email });

        if (currentUser) {
            return res.status(400).json({
                status: false,
                message: 'Email đã được sử dụng'
            });
        }

        const user = new UserModel({
            email,
            fullname,
            password: bcrypt.hashSync(password, 10)
        });
        try {
            await user.save();
            res.json({
                status: true,
                message: 'Đăng ký thành công'
            });
        } catch (err) {
            res.json({
                status: false,
                message: 'Đăng ký thất bại'
            });
        }
    },

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    status: false,
                    message: 'Vui lòng nhập đầy đủ thông tin'
                });
            }

            const currentUser = await UserModel.findOne({ email });

            if (!currentUser) {
                return res.status(400).json({
                    status: false,
                    message: 'Email không tồn tại'
                });
            }

            const checkPassword = bcrypt.compareSync(password, currentUser.password);

            if (!checkPassword) {
                return res.status(400).json({
                    status: false,
                    message: 'Mật khẩu không chính xác'
                });
            }

            const token = jwt.sign({
                id: currentUser._id,
                role: currentUser.role
            }, process.env.JWT_ACCESS_SECRET, { expiresIn: '1d' });

            res.json({
                status: true,
                message: 'Đăng nhập thành công',
                token,
                userInfo:{
                    id: currentUser._id,
                    email: currentUser.email,
                    fullname: currentUser.fullname,
                    role: currentUser.role,
                    phone: currentUser.phone,
                    address: currentUser.address,
                }
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Đăng nhập thất bại'
            });
        }
    },

}