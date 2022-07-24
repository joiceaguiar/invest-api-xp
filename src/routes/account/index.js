const express = require('express');

const accountController = require('../../controllers/accountController');
const clientValidation = require('../../middlewares/clientMiddleware');

const accountRouter = express.Router();

accountRouter.post('/deposito', clientValidation, accountController.createDeposit);
accountRouter.post('/saque', clientValidation, accountController.createWithdrawal);
accountRouter.get('/:id', accountController.getByClientId);

module.exports = accountRouter;
