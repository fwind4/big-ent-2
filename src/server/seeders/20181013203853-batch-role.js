'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Roles', [
        { name: 'admin'}, { name: 'staff'}, { name: 'user'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
