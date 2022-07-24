const accountValidation = async (req, res, next) => {
  const { clientId, value } = req.body;

  if (!clientId || !value) {
    return res.status(400).json({ message: 'Data is required' });
  }

  next();
};

module.exports = accountValidation;
