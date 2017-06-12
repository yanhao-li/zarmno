module.exports = function DishFunc(sequelize, DataTypes) {
  const Dish = sequelize.define('Dish', {
    id: { type: DataTypes.UUID, primaryKey: true, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    restaurantId: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Dish;
};
