const express = require('express');

const investmentController = require('../../controllers/investmentController');
const clientValidation = require('../../middlewares/clientMiddleware');
const assetValidation = require('../../middlewares/assetMiddleware');

const investmentsRouter = express.Router();

investmentsRouter.post('/comprar', clientValidation, assetValidation, investmentController.createPurchase);
investmentsRouter.post('/vender', clientValidation, assetValidation, investmentController.createSale);

module.exports = investmentsRouter;
