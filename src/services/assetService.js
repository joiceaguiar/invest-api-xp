const { Asset, ClientAsset } = require('../database/models');

const getByClientId = async (clientId) => {
  const client = await ClientAsset.findAll( { where: { clientId } });

  if (!client.length) {
    return { status: 404, response: { message: 'Client not found' } };
  };

  const dataValues = await Promise.all(client.map(async(data) => {
    const asset = await Asset.findOne({ where: { id: data.assetId } });
    const datas = {
      CodCliente: data.clientId,
      CodAtivo: data.assetId,
      QtdeAtivo: data.quantity,
      Valor: asset.value
    }
    return datas;
  }));

  return { status: 200, response: dataValues } };

const getByAssetId = async (assetId) => {
  const asset = await Asset.findOne({ where: { id: assetId } });

  if (!asset) {
    return { status: 404, response: { message: 'Asset does not exist' } };
  };

  return {
    status: 200,
    response: { 
      CodAtivo: assetId, 
      QtdeAtivo: asset.quantity,
      Valor: asset.value
    }
  };
};

module.exports = {
  getByClientId,
  getByAssetId,
};
