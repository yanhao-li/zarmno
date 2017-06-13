module.exports = function CollectionFunc(sequelize, DataTypes) {
  const RestaurantImage = sequelize.define('RestaurantImage', {
    restaurantId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    imageId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return RestaurantImage;
};
