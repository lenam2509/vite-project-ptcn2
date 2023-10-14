const billmodel = require('../models/bill.model');
const usermodel = require('../models/user.model');
const billController = {
    async createBill(req, res) {
        const { user, products, total, paymentMethod, name, email, phone, address, cityDistricts, note } = req.body;
        try {
            const payload = {
                user,
                products: [
                    ...products,
                ],
                total,
                paymentMethod,
                name,
                email,
                phone,
                address,
                cityDistricts,
                note,
                billId: `#${Math.floor(Math.random() * 1000)}`,
            };
            const userFound = await usermodel.findById(user);
            //    check if user have phone and address
            if (userFound.phone === 0 || userFound.address === '') {
                //   update user
                await usermodel.findByIdAndUpdate(user, {
                    phone,
                    address,
                })
            }
            const bill = new billmodel(payload);
            await bill.save();
            res.status(201).json({ bill });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

    async getBills(req, res) {
        const { page, limit } = req.query;
        const defaultLimit = 5;
        const defaultPage = 1;

        const parsedLimit = parseInt(limit) || defaultLimit;
        const parsedPage = parseInt(page) || defaultPage;
        try {
            const bills = await billmodel
                .find()
                .populate('user', 'name email phone address')
                .populate('products.product', 'name price photo')
                .limit(parsedLimit)
                .skip((parsedPage - 1) * parsedLimit)
                .sort({ createdAt: -1 });
            const count = await billmodel.countDocuments();
            const totalPages = Math.ceil(count / parsedLimit);

            res.status(200).json({
                totalBills: count,
                totalPages,
                currentPage: parsedPage,
                limit: parsedLimit,
                bills
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

    async getOneBill(req, res) {
        const { id } = req.params;
        try {
            const bill = await billmodel
                .findById(id)
                .populate('user', 'name email phone address')
                .populate('products.product', 'name price photo');
            if (!bill) {
                return res.status(404).json({
                    message: 'Bill not found'
                });
            }
            res.status(200).json({ bill });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

    async updateBillStatus(req, res) {
        const { id } = req.params;
        const { status, note } = req.body;
        try {
            const bill = await billmodel.findById(id);
            if (!bill) {
                return res.status(404).json({
                    message: 'Bill not found'
                });
            }
            await billmodel.findByIdAndUpdate(id, {
                status,
                note,
            });
            res.status(200).json({
                message: 'Update bill status successfully'
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    },

}

module.exports = billController;