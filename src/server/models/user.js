'use strict';
var passwordHash = require('password-hash');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      userName: {
        type: DataTypes.STRING,
        unique: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      passwordHash: DataTypes.STRING,
      password: {
        type: DataTypes.VIRTUAL,
        set: function (val) {
           // Remember to set the data value, otherwise it won't be validated
           this.setDataValue('password', val);
           this.setDataValue('password_hash', passwordHash.generate(val));
         },
         validate: {
            isLongEnough: function (val) {
              if (val.length < 6) {
                throw new Error("Please choose a longer password")
             }
          }
        }
      }
    },
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.Role);
  };
  return User;
};
