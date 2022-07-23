module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [
        {
          id: 1,
          name: 'Han Solo',
          balance: 1000,
        },
        {
          id: 2,
          name: 'Leia Organa',
          balance: 20000,
        },
        {
          id: 3,
          name: 'Luke Skywalker',
          balance: 3000,
        },
        {
          id: 4,
          name: 'Obi-Wan Kenobi',
          balance: 9000,
        },
        {
          id: 5,
          name: 'Mestre Yoda',
          balance: 500,
        },
        {
          id: 6,
          name: 'Padmé Amidala',
          balance: 30000,
        },
        {
          id: 7,
          name: 'C-3PO',
          balance: 20,
        },
        {
          id: 8,
          name: 'R2-D2',
          balance: 200,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
