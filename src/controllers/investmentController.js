const investmentService = require('../services/investmentService');

const createPurchase = async (req, res) => {
  try {
    const { status, response } = await investmentService.createPurchase(req.body);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createPurchase,
};
