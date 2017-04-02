'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false}
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Restaurant.belongsTo(models.User);
      }
    }
  });
  return Restaurant;
};
