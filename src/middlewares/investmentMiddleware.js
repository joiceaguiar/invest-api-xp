const investmentValidation = async (req, res, next) => {
  const { clientId, assetId, quantity } = req.body;

  if (!clientId || !assetId || !quantity) {
    return res.status(400).json({ message: 'Data is required' });
  }

  next();
};

module.exports = investmentValidation;
