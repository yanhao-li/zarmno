module.exports = function CommentFunc(sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    id: { type: DataTypes.BIGINT(8).ZEROFILL, autoIncrement: true, primaryKey: true, unique: true, allowNull: false },
    authorId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false },
    content: { type: DataTypes.STRING },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Comment;
};
