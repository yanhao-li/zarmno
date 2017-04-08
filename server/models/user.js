const bcrypt = require('bcrypt');
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    passwordDigest: {type: DataTypes.STRING, allowNull: false}
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      generateHash: function(password) {
        return bcrypt.hashSync(password, 8);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.local.password);
      }
    }
  });
  return User;
};
