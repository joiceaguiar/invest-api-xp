const accountValidation = async (req, res, next) => {
  const { clientId, value } = req.body;

  if (!clientId || !value) {
    return res.status(400).json({ message: 'Information is needed' });
  }

  next();
};

module.exports = accountValidation;
