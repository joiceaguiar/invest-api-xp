module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ClientAssets',
      [
        {
          clientId: 4,
          assetId: 5,
          quantity: 5,
        },
        {
          clientId: 3,
          assetId: 7,
          quantity: 5,
        },
        {
          clientId: 2,
          assetId: 8,
          quantity: 5,
        },
        {
          clientId: 1,
          assetId: 9,
          quantity: 5,
        },
        {
          clientId: 6,
          assetId: 4,
          quantity: 5,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ClientAssets', null, {});
  },
};
