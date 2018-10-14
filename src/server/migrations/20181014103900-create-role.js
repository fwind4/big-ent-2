'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
    .then(() => {
      return queryInterface.addColumn(
        'Users', // name of Target model
        'RoleId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Roles', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users', // name of Source model
      'RoleId' // key we want to remove
    ).then(() => {
      return queryInterface.dropTable('Roles');
    });
  }
};