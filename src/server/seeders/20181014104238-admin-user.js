'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        RoleId: 1,
        userName: 'admin',
        firstName: 'Csaba',
        lastName: 'Vass',
        email: 'wind@bringer.com',
        passwordHash: '123456'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
