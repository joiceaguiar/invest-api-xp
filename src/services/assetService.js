const { Asset, ClientAsset } = require('../database/models');

const getByClientId = async (clientId) => {
  const client = await ClientAsset.findByPk(clientId);
  const asset = await Asset.findOne();

  if (!client) {
    return { status: 404, response: { message: 'Client not found' } };
  };

  return { 
    status: 200, 
    response: [{ 
      CodCliente: clientId,
      CodAtivo: client.assetId,
      QtdeAtivo: client.quantity,
      Valor: asset.value
    }]
  };
};

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
