const express = require('express');

const accountController = require('../../controllers/accountController');
const accountValidation = require('../../middlewares/accountMiddleware');

const accountRouter = express.Router();

accountRouter.post('/deposito', accountValidation, accountController.createDeposit);
accountRouter.post('/saque', accountValidation, accountController.createWithdrawal);
accountRouter.get('/:id', accountController.getByClientId);

module.exports = accountRouter;
