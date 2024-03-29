const accountService = require('../services/accountService');

const createDeposit = async (req, res) => {
  try {
    const { status, response } = await accountService.createDeposit(req.body);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const createWithdrawal = async (req, res) => {
  try {
    const { status, response } = await accountService.createWithdrawal(req.body);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const getByClientId = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, response } = await accountService.getByClientId(id);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createDeposit,
  createWithdrawal,
  getByClientId,
};
