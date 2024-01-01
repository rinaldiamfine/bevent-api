'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'events', 
      {
        id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        created_by: Sequelize.INTEGER,
        created_at: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          allowNull: false
        },
        updated_by: Sequelize.INTEGER,
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          allowNull: false
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('events');
  }
};
