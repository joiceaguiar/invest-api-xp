const ClientSchema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define('Client', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    balance: DataTypes.DECIMAL(7,2),
  }, {
    timestamps: false,
  });

  return ClientTable;
};

module.exports = ClientSchema;
