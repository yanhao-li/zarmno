module.exports = function DishFunc(sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
    id: { type: DataTypes.UUID, primaryKey: true, unique: true, allowNull: false },
    coverImgUrl: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    category: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING, allowNull: false },
    restaurantId: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.FLOAT },
    orderCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    favoriteCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    imageCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    price: { type: DataTypes.FLOAT, defaultValue: 0.00 },
    priceNote: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Item;
};
