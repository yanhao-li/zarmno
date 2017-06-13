module.exports = function DishFunc(sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    id: { type: DataTypes.UUID, primaryKey: true, unique: true, allowNull: false },
    url: { type: DataTypes.STRING },
    width: { type: DataTypes.INTEGER },
    height: { type: DataTypes.INTEGER },
    authorId: { type: DataTypes.UUID },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Image;
};
