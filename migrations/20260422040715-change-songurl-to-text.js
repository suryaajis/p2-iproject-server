'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Songs', 'songUrl', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('Songs', 'fullSongUrl', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Songs', 'songUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('Songs', 'fullSongUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};