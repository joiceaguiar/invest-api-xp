const AssetSchema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Asset', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL(7,2),
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  return AssetTable;
};

module.exports = AssetSchema;
