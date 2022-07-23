module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [
        {
          id: 1,
          name: 'AZUL4',
          value: 12.11,
          quantity: 750,
        },
        {
          id: 2,
          name: 'PETR4',
          value: 28.61,
          quantity: 500,
        },
        {
          id: 3,
          name: 'VALE4',
          value: 69.17,
          quantity: 250,
        },
        {
          id: 4,
          name: 'ALPA4',
          value: 20.63,
          quantity: 950,
        },
        {
          id: 5,
          name: 'ABEV3',
          value: 14.51,
          quantity: 700,
        },
        {
          id: 6,
          name: 'ARZZ3',
          value: 74.13,
          quantity: 450,
        },
        {
          id: 7,
          name: 'CRFB3',
          value: 16.93,
          quantity: 1000,
        },
        {
          id: 8,
          name: 'CIEL3',
          value: 4.08,
          quantity: 850,
        },
        {
          id: 9,
          name: 'CVCB3',
          value: 6.76,
          quantity: 650,
        },
        {
          id: 10,
          name: 'GGBR4',
          value: 23.81,
          quantity: 550,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};
