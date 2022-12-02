const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john@mail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe2',
          email: 'john2@mail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe3',
          email: 'john3@mail.com',
          password_hash: await bcryptjs.hash('147852369', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
