const billModel = require('../models/bill.model');

const statisticalController = {
    getBillstatistical: async (req, res) => {

        try {
            const bills = await billModel.find();
            const statistical = {
                totalBill: bills.length,
                pending: 0,
                processing: 0,
                delivered: 0,
                cancelled: 0,
                completed: 0
            }
            bills.forEach(bill => {
                switch (bill.status) {
                    case 'Pending':
                        statistical.pending++;
                        break;
                    case 'Processing':
                        statistical.processing++;
                        break;
                    case 'Delivered':
                        statistical.delivered++;
                        break;
                    case 'Cancelled':
                        statistical.cancelled++;
                        break;
                    case 'Completed':
                        statistical.completed++;
                        break;
                    default:
                        break;
                }
            });
            res.json(statistical);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    RevenueStatistics: async (req, res) => {
        const { month, year } = req.query;
        try {
            //  only count for completed bills
            const bills = await billModel.find({ status: 'Completed' });

            const statistical = {
                total: 0,
                Thang1: 0,
                Thang2: 0,
                Thang3: 0,
                Thang4: 0,
                Thang5: 0,
                Thang6: 0,
                Thang7: 0,
                Thang8: 0,
                Thang9: 0,
                Thang10: 0,
                Thang11: 0,
                Thang12: 0,
            }

            bills.forEach(bill => {
                const date = new Date(bill.createdAt);
                if (date.getFullYear() == year) {
                    switch (date.getMonth()) {
                        case 0:
                            statistical.Thang1 += bill.total;
                            break;
                        case 1:
                            statistical.Thang2 += bill.total;
                            break;
                        case 2:
                            statistical.Thang3 += bill.total;
                            break;
                        case 3:
                            statistical.Thang4 += bill.total;
                            break;
                        case 4:
                            statistical.Thang5 += bill.total;
                            break;
                        case 5:
                            statistical.Thang6 += bill.total;
                            break;
                        case 6:
                            statistical.Thang7 += bill.total;
                            break;
                        case 7:
                            statistical.Thang8 += bill.total;
                            break;
                        case 8:
                            statistical.Thang9 += bill.total;
                            break;
                        case 9:
                            statistical.Thang10 += bill.total;
                            break;
                        case 10:
                            statistical.Thang11 += bill.total;
                            break;
                        case 11:
                            statistical.Thang12 += bill.total;
                            break;
                        default:
                            break;
                    }
                    if (month == date.getMonth() + 1) {
                        statistical.total += bill.total;
                    }
                }
            });
            res.json(statistical);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    Totalproductssold: async (req, res) => {
        try {
            //  only count for completed bills
            const bills = await billModel.find({ status: 'Completed' });
            // count total products sold from bill completed
            const statistical = {
                total: 0,
            }
            bills.forEach(bill => {
                statistical.total += bill.products.length;
            });
            res.json(statistical);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
}

module.exports = statisticalController;