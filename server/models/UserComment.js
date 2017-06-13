module.exports = function CollectionFunc(sequelize, DataTypes) {
  const UserComment = sequelize.define('UserComment', {
    itemId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    commentId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    isLike: { type: DataTypes.BOLLEAN, defaultValue: false },
    isDisLike: { type: DataTypes.BOLLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserComment;
};
