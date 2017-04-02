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
      }
    }
  });
  return User;
};
