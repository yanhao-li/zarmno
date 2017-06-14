module.exports = function UserItemFunc(sequelize, DataTypes) {
  const UserItem = sequelize.define('UserItem', {
    userId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    itemId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    orderCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    isFavorite: { type: DataTypes.BOOLEAN, defaultValue: false },
    isDislike: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserItem;
};
