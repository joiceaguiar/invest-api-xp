const { Asset, Client, ClientAsset } = require('../database/models');

const createPurchase = async ({ clientId, assetId, quantity }) => {
  const client = await Client.findOne({ where: { id: clientId } });
  const asset = await Asset.findOne({ where: { id: assetId } });

  if (!client) {
    return res.status(404).json({ message: 'Client does not exist' }); 
  };

  if (!asset) {
    return res.status(404).json({ message: 'Asset does not exist' }); 
  };

  const clientWallet = await ClientAsset.findOne({ where: { clientId, assetId } });

  if (quantity > asset.quantity) {
    return { status: 400, response: { message: 'Quantity cannot be greater than available' } };
  };

  if (!clientWallet) {
    await ClientAsset.create({ clientId, assetId, quantity });
  } else {
    const updateWallet = Number(clientWallet.quantity) + Number(quantity);
    await ClientAsset.update({ quantity: updateWallet }, { where: { clientId, assetId } });
  };

  const totalValue = quantity * asset.value;
  const newQuantity = Number(asset.quantity) - Number(quantity);
  const newBalance = Number(client.balance) - Number(totalValue);

  if (totalValue > client.balance) {
    return { status: 400, response: { message: 'The amount cannot be greater than clients balance' } };
  };

  await Asset.update({ quantity: newQuantity }, { where: { id: assetId } });
  await Client.update({ balance: newBalance }, { where: { id: clientId } });

  return {
    status: 201,
    response: {
      codCliente: clientId,
      codAtivo: assetId,
      qtdeAtivo: quantity
    }
  };
};

const createSale = async ({ clientId, assetId, quantity }) => {
  const client = await Client.findOne({ where: { id: clientId } });
  const asset = await Asset.findOne({ where: { id: assetId } });

  if (!client) {
    return res.status(404).json({ message: 'Client does not exist' }); 
  };

  if (!asset) {
    return res.status(404).json({ message: 'Asset does not exist' }); 
  };

  const clientWallet = await ClientAsset.findOne({ where: { clientId, assetId } });

  if (!clientWallet) {
    return { status: 404, response: { message: 'Client does not has assets' } }; 
  };

  const totalValue = quantity * asset.value;
  const newBalance = Number(client.balance) + Number(totalValue);
  const newQuantity = Number(asset.quantity) + Number(quantity);
  const updateWallet = Number(clientWallet.quantity) - Number(quantity);

  if (quantity > clientWallet.quantity) {
    return { status: 400, response: { message: 'Quantity cannot be greater than available' } };
  };

  await Asset.update({ quantity: newQuantity }, { where: { id: assetId } });
  await Client.update({ balance: newBalance }, { where: { id: clientId } });
  await ClientAsset.update({ quantity: updateWallet }, { where: { clientId, assetId } });

  return {
    status: 201,
    response: {
      codCliente: clientId,
      codAtivo: assetId,
      qtdeAtivo: quantity
    }
  };
};

module.exports = {
  createPurchase,
  createSale,
};
