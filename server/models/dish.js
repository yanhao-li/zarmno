'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dish = sequelize.define('Dish',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false}
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dish;
};
