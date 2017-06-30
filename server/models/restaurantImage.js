module.exports = function RestaurantImageFunc(sequelize, DataTypes) {
  const RestaurantImage = sequelize.define('RestaurantImage', {
    restaurantId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    imageId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return RestaurantImage;
};
