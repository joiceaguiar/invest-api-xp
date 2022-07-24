const assetService = require('../services/assetService');

const getByClientId = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, response } = await assetService.getByClientId(id);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

const getByAssetId = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, response } = await assetService.getByAssetId(id);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getByClientId,
  getByAssetId,
};
