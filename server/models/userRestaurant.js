module.exports = function UserRestaurantFunc(sequelize, DataTypes) {
  const UserRestaurant = sequelize.define('UserRestaurant', {
    userId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    restaurantId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    checkinCount: { type: DataTypes.INTEGER },
    isFavorite: { type: DataTypes.BOOLEAN, defaultValue: false },
    isDislike: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserRestaurant;
};
