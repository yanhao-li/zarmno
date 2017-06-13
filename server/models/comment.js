module.exports = function DishFunc(sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    id: { type: DataTypes.UUID, primaryKey: true, unique: true, allowNull: false },
    authorId: { type: DataTypes.UUID, allowNull: false },
    content: { type: DataTypes.STRING },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Comment;
};
