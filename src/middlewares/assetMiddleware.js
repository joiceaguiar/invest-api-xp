const { Asset } = require('../database/models');

const assetValidation = async (req, res, next) => {
  const { assetId } = req.body;
  const asset = await Asset.findOne({ where: { id: assetId } });
  
  if (!asset) {
    return res.status(404).json({ message: 'Asset does not exist' }); 
  };
  
  next();
};

module.exports = assetValidation;
