'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Favorites', {
      fields: ['UserId', 'SongId'],
      type: 'unique',
      name: 'unique_user_song_favorite'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Favorites', 'unique_user_song_favorite');
  }
};
