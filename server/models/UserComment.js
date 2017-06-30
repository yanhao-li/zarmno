module.exports = function UserCommentFunc(sequelize, DataTypes) {
  const UserComment = sequelize.define('UserComment', {
    itemId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    commentId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    isLike: { type: DataTypes.BOOLEAN, defaultValue: false },
    isDisLike: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return UserComment;
};
