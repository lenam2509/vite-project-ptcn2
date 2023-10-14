const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill.controller');

router.post('/', billController.createBill);
router.get('/', billController.getBills);
router.get('/:id', billController.getOneBill);
router.put('/:id', billController.updateBillStatus);

module.exports = router;