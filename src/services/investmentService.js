const { Asset, Client, ClientAsset } = require('../database/models');

const createPurchase = async ({ clientId, assetId, quantity }) => {
  const client = await Client.findOne({ where: { id: clientId } });
  const asset = await Asset.findOne({ where: { id: assetId } });
  const clientAsset = await ClientAsset.findOne({ where: { clientId, assetId } });

  const totalValue = quantity * asset.value;
  const newQuantity = Number(asset.quantity) - Number(quantity);
  const newBalance = Number(client.balance) - Number(totalValue);

  if (quantity > asset.quantity) {
    return { status: 400, response: { message: 'Quantity cannot be greater than available' } };
  };

  if (totalValue > client.balance) {
    return { status: 400, response: { message: 'The amount cannot be greater than clients balance' } };
  };

  const updateAsset = await Asset.update(
    { quantity: newQuantity }, { where: { id: assetId } });

  const updateBalanceClient = await Client.update(
    { balance: newBalance }, { where: { id: clientId } });

  const createWallet = await ClientAsset.create({ clientId, assetId, quantity });

  return { status: 201, response: { codCliente: clientId, codAtivo: assetId, qtdeAtivo: quantity } };
};

const createSale = async ({ clientId, assetId, quantity }) => {
  const client = await Client.findOne({ where: { id: clientId } });
  const asset = await Asset.findOne({ where: { id: assetId } });
  const clientAsset = await ClientAsset.findOne({ where: { clientId, assetId } });

  const totalValue = quantity * asset.value;
  const newQuantityWallet = Number(clientAsset.quantity) - Number(quantity);
  const newBalance = Number(client.balance) + Number(totalValue);
  const newQuantity = Number(asset.quantity) + Number(quantity);

  if (quantity > clientAsset.quantity) {
    return { status: 400, response: { message: 'Quantity cannot be greater than available' } };
  };

  const updateAssetWallet = await ClientAsset.update(
    { quantity: newQuantityWallet }, { where: { clientId, assetId } });

  const updateBalanceClient = await Client.update(
    { balance: newBalance }, { where: { id: clientId } });

  const updateAsset = await Asset.update(
    { quantity: newQuantity }, { where: { id: assetId } });

  return { status: 201, response: { codCliente: clientId, codAtivo: assetId, qtdeAtivo: quantity } };
};

module.exports = {
  createPurchase,
  createSale,
};
