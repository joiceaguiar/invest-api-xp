const clientAssetSchema = (sequelize, DataTypes) => {
  const clientAssetTable = sequelize.define('ClientAsset', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  clientAssetTable.associate = (models) => {
    models.Client.belongsToMany(models.Asset, {
      as: 'assets',
      through: clientAssetTable,
      foreignKey: 'clientId',
      otherKey: 'assetId',
    });

    models.Asset.belongsToMany(models.Client, {
      as: 'clients',
      through: clientAssetTable,
      foreignKey: 'assetId',
      otherKey: 'clientId',
    });
  };

  return clientAssetTable;
};

module.exports = clientAssetSchema;
