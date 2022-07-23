const accountService = require('../services/accountService');

const createDeposit = async (req, res) => {
  try {
    const { status, response } = await accountService.createDeposit(req.body);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createDeposit,
};
