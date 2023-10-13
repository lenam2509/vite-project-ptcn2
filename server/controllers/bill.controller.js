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
        const defaultLimit = 5 || limit;
        const defaultPage = 1 || page;
        try {
            const bills = await billmodel
                .find()
                .populate('user', 'name email phone address')
                .populate('products.product', 'name price photo')
                .limit(defaultLimit)
                .skip((defaultPage - 1) * defaultLimit)
                .sort({ createdAt: -1 });
            const totalBills = await billmodel.countDocuments();
            res.status(200).json({
                totalBills,
                limit: defaultLimit,
                totalPages: Math.ceil(totalBills / (limit || defaultLimit)),
                currentPage: page || defaultPage,
                bills,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    }


}

module.exports = billController;