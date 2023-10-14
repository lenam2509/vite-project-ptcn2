const express = require('express');
const router = express.Router();
const statisticalController = require('../controllers/statistical.controller');

router.get('/bills', statisticalController.getBillstatistical);
router.get('/revenue', statisticalController.RevenueStatistics);
router.get('/producstsold', statisticalController.Totalproductssold);


module.exports = router;