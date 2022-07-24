const { Client } = require('../database/models');

const clientValidation = async (req, res, next) => {
  const { clientId } = req.body;
  const client = await Client.findOne({ where: { id: clientId } });
  
  if (!client) {
    return res.status(404).json({ message: 'Client does not exist' }); 
  };

  next();
};

module.exports = clientValidation;
