const express = require('express');

const investmentController = require('../../controllers/investmentController');
const investmentValidation = require('../../middlewares/investmentMiddleware');

const investmentsRouter = express.Router();

investmentsRouter.post('/comprar', investmentValidation, investmentController.createPurchase);
investmentsRouter.post('/vender', investmentValidation, investmentController.createSale);

module.exports = investmentsRouter;
