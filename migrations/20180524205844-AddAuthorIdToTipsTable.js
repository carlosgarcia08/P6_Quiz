'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'tips',
          'authorId',
          {type: Sequelize.INTEGER}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('tips', 'authorId');
  }
};
