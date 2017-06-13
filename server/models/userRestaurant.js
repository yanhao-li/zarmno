module.exports = function CollectionFunc(sequelize, DataTypes) {
  const UserRestaurant = sequelize.define('UserRestaurant', {
    userId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    restaurantId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    checkinCount: { type: DataTypes.INTEGER },
    isFavorite: { type: DataTypes.BOLLEAN, defaultValue: false },
    isDislike: { type: DataTypes.BOLLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserRestaurant;
};
