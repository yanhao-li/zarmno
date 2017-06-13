module.exports = function CollectionFunc(sequelize, DataTypes) {
  const UserItem = sequelize.define('UserItem', {
    userId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    itemId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    orderCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    isFavorite: { type: DataTypes.BOLLEAN, defaultValue: false },
    isDislike: { type: DataTypes.BOLLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserItem;
};
